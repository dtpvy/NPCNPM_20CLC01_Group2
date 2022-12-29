package controllers

import (
	"encoding/json"
	"fmt"
	db "main/database"
	md "main/models"
	"main/presenters"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"golang.org/x/exp/maps"
	"gorm.io/gorm/clause"
)

func CreateOrder(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	var carts []md.Cart

	order := md.Order{
		UserId:  userId.(string),
		Address: payload["address"].(string),
		Phone:   payload["phone"].(string),
		Status:  "inprogress",
	}
	_db.Create(&order)
	packages := make(map[string]md.OrderPackage)
	_db.Preload("Product").Where("user_id = ? and is_selected = true", userId).Find(&carts)
	for _, cart := range carts {
		orderItem := md.OrderItem{
			OrderId:   order.Id,
			SellerId:  cart.Product.CreatorId,
			ProductId: cart.ProductId,
			Quantity:  cart.Quantity,
			Price:     cart.Product.Price,
			Image:     cart.Product.Image,
			Name:      cart.Product.Name,
		}
		order.Total += orderItem.Price * orderItem.Quantity
		order.OrderItems = append(order.OrderItems, orderItem)
		_package, ok := packages[cart.Product.CreatorId]
		if !ok {
			packages[cart.Product.CreatorId] = md.OrderPackage{
				OrderId:  order.Id,
				SellerId: cart.Product.CreatorId,
				Status:   "Đang chuẩn bị",
				Total:    orderItem.Price * orderItem.Quantity,
			}
		} else {
			_package.Total += orderItem.Price * orderItem.Quantity
			packages[cart.Product.CreatorId] = _package
		}
	}
	order.OrderPackages = maps.Values(packages)
	_db.Save(&order)
	_db.Preload(clause.Associations).Preload("OrderPackages.Seller").Preload("OrderPackages.OrderItems").Where("id = ?", order.Id).First(&order)
	var response = presenters.BuildResponse(order)
	json.NewEncoder(w).Encode(response)
}

func UpdateOrder(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	id := ps.ByName("id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	var order md.Order
	_db.Preload(clause.Associations).Preload("OrderPackages.Seller").Preload("OrderPackages.OrderItems").Where("id = ?", id).First(&order)
	if userId == order.UserId && (payload["is_seller"] == nil || payload["is_seller"].(bool) == false) {
		order.Status = payload["status"].(string)
		err := _db.Model(&md.Order{}).Where("id = ?", order.Id).Update("status", payload["status"]).Error
		if err != nil {
			var response = presenters.BuildMessageResponse("Update order status failure")
			json.NewEncoder(w).Encode(response)
		} else {
			var response = presenters.BuildMessageResponse("Update order status successfully")
			json.NewEncoder(w).Encode(response)
		}
		return
	} else {
		for _, pk := range order.OrderPackages {
			if pk.SellerId == userId {
				fmt.Println(pk)
				err := _db.Model(&md.OrderPackage{}).Where("order_id = ? and seller_id = ?", order.Id, pk.SellerId).Update("status", payload["status"]).Error
				if err != nil {
					var response = presenters.BuildMessageResponse("Update order status failure")
					json.NewEncoder(w).Encode(response)
				} else {
					var response = presenters.BuildMessageResponse("Update order status successfully")
					json.NewEncoder(w).Encode(response)
				}
				return
			}
		}
	}
	var response = presenters.BuildMessageResponse("Update order status failure")
	json.NewEncoder(w).Encode(response)
}

func GetOrder(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id := ps.ByName("id")
	userId := r.Context().Value("user_id")
	_db := db.Connect()
	var order md.Order
	_db.Preload(clause.Associations).Preload("OrderPackages.Seller").Preload("OrderPackages.OrderItems").Where("id = ?", id).First(&order)
	if userId != order.UserId {
		for _, pk := range order.OrderPackages {
			if pk.SellerId == userId {
				order.OrderPackages = []md.OrderPackage{pk}
				break
			}
		}
	}

	var response = presenters.BuildResponse(order)
	json.NewEncoder(w).Encode(response)
}
