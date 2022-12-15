package controllers

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func GetUserInfo(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	_db := db.Connect()
	var user User

	_db.Where("id = ?", userId).First(&user)
	var response = md.BuildResponse(user)
	json.NewEncoder(w).Encode(response)
}

func UpdateUserInfo(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	user := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&user)
	_db := db.Connect()
	if user["seller_name"] != nil {
		var users []User
		_db.Where("seller_name = ? and id <> ?", user["seller_name"], userId).Find(&users)
		if len(users) > 0 {
			var response = md.BuildMessageResponse("Seller name is exist")
			json.NewEncoder(w).Encode(response)
			return
		}
		_db.Model(md.User{}).Where("id = ?", userId).Updates(user)
		var collections []Collection
		_db.Where("seller_id = ?", userId).Find(&collections)
		if len(collections) == 0 {
			collection := Collection{Name: "Tất cả", Image: "", SellerId: userId.(string)}
			_db.Create(&collection)
		}
	} else {
		_db.Model(md.User{}).Where("id = ?", userId).Updates(user)
	}
	var response = md.BuildMessageResponse("Update user information successfully")
	json.NewEncoder(w).Encode(response)
}

func GetUserOrders(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	_db := db.Connect()
	var user User

	_db.Where("id = ?", userId).First(&user)
	var response = md.BuildResponse(user)
	json.NewEncoder(w).Encode(response)
}
