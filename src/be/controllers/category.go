package controllers

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

const ADMIN_ID = "4d94422a-5471-4828-a122-dcf2ad249e7a"

func CreateCategory(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]string)
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	category := md.Category{Name: payload["name"], Image: payload["image"], Title: payload["title"]}
	_db.Create(&category)
	if userId != ADMIN_ID {
		var response = md.BuildMessageResponse("Create collection failed")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = md.BuildMessageResponse("Create collection successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func UpdateCategory(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id := ps.ByName("id")
	_db := db.Connect()
	var product md.ProductDetail
	err := _db.Model(md.Product{}).Where("id = ?", id).First(&product).Error
	if err != nil {
		w.WriteHeader(502)
		var response = md.BuildErrorResponse("Server error", nil)
		json.NewEncoder(w).Encode(response)
	} else {
		_db.Table("users").Select("users.*").Joins("left join collections on collections.seller_id = users.id").Joins("left join collection_details on collections.id = collection_details.collection_id").Where("collection_details.product_id = ?", id).Order("collections.created_at asc").First(&product.User)
		var response = md.BuildResponse(product)
		json.NewEncoder(w).Encode(response)
	}
}

func GetCategoryList(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	_db := db.Connect()
	var categories []md.Category
	_db.Find(&categories)
	var response = md.BuildResponse(categories)
	json.NewEncoder(w).Encode(response)
}
