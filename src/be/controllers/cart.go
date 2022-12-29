package controllers

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"main/presenters"
	uts "main/utils"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"golang.org/x/exp/maps"
)

func AddProductToCart(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	var cart md.Cart
	_db.Where("product_id = ? and user_id = ?", payload["product_id"], userId).First(&cart)
	if cart.Quantity == 0 {
		cart.ProductId = payload["product_id"].(string)
		cart.Quantity = int(payload["quantity"].(float64))
		cart.UserId = userId.(string)
		err := _db.Create(&cart).Error
		if err != nil {
			var response = presenters.BuildMessageResponse("Add to cart failure")
			json.NewEncoder(w).Encode(response)
		} else {
			var response = presenters.BuildMessageResponse("Add to cart successfully")
			json.NewEncoder(w).Encode(response)
		}
	} else {
		cart.Quantity += int(payload["quantity"].(float64))
		err := _db.Where("product_id = ? and user_id = ?", cart.ProductId, cart.UserId).Save(&cart).Error
		if err != nil {
			var response = presenters.BuildMessageResponse("Add to cart failure")
			json.NewEncoder(w).Encode(response)
		} else {
			var response = presenters.BuildMessageResponse("Add to cart successfully")
			json.NewEncoder(w).Encode(response)
		}
	}
}

func UpdateProductCart(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()

	err := _db.Model(md.Cart{}).Where("user_id = ? and product_id = ?", userId, payload["product_id"]).Updates(payload).Error

	if err != nil {
		var response = presenters.BuildMessageResponse("Update cart failure")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Update cart successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func CleanCart(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	_db := db.Connect()

	err := _db.Delete(&md.Cart{}, "user_id = ?", userId).Error

	if err != nil {
		var response = presenters.BuildMessageResponse("Clean cart failure")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Clean cart successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func RemoveProductCart(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	err := _db.Where("user_id = ? and product_id = ?", userId, payload["product_id"]).Delete(&md.Cart{}).Error

	if err != nil {
		var response = presenters.BuildMessageResponse("Delete product failure")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Delete product successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func bool2int(b bool) int {
	if b {
		return 1
	}
	return 0
}

func GetCart(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	_db := db.Connect()
	var carts []md.Cart
	_db.Preload("Product").Preload("Product.Creator").Where("user_id = ?", userId).Find(&carts)
	sellers := make(map[string]presenters.Seller)
	var cartInfo presenters.Cart
	for _, cart := range carts {
		cart.Product.Quantity = cart.Quantity
		product := presenters.CartItem{
			Id:          cart.Product.Id,
			Name:        cart.Product.Name,
			Image:       cart.Product.Image,
			Quantity:    cart.Quantity,
			Description: cart.Product.Description,
			Price:       cart.Product.Price,
			OldPrice:    cart.Product.OldPrice,
			IsSelected:  cart.IsSelected,
		}
		_seller, ok := sellers[cart.Product.CreatorId]
		if !ok {
			sellers[cart.Product.CreatorId] = presenters.Seller{
				Products: []presenters.CartItem{product},
				Seller:   uts.MappingUserResponse(cart.Product.Creator),
				Total:    bool2int(product.IsSelected) * product.Quantity * product.Price,
				Selected: bool2int(product.IsSelected) * product.Quantity,
			}
		} else {
			_seller.Selected += bool2int(product.IsSelected) * cart.Quantity
			_seller.Total += bool2int(product.IsSelected) * product.Quantity * product.Price
			_seller.Products = append(_seller.Products, product)
			sellers[cart.Product.CreatorId] = _seller
		}
		cartInfo.Total += bool2int(product.IsSelected) * product.Quantity * product.Price
		cartInfo.Selected += bool2int(product.IsSelected) * product.Quantity
	}
	cartInfo.Sellers = maps.Values(sellers)
	var response = presenters.BuildResponse(cartInfo)
	json.NewEncoder(w).Encode(response)
}
