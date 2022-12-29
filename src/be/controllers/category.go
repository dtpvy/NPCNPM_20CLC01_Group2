package controllers

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"main/presenters"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func CreateCategory(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	payload := make(map[string]string)
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	category := md.Category{Name: payload["name"], Image: payload["image"], Title: payload["title"]}
	err := _db.Create(&category).Error
	if err != nil {
		var response = presenters.BuildMessageResponse("Create collection failed")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Create collection successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func UpdateCategory(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	category := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&category)
	_db := db.Connect()
	var _product md.Product
	_db.Where("id = ?", category["id"]).First(&_product)
	err := _db.Model(md.Category{}).Where("id = ?", category["id"]).Updates(category).Error
	if err != nil {
		var response = presenters.BuildMessageResponse("Update category failed")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Update category successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func DeleteCategory(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id := ps.ByName("id")
	_db := db.Connect()
	err := _db.Where("id = ?", id).Delete(&md.Category{}).Error
	if err != nil {
		w.WriteHeader(502)
		var response = presenters.BuildErrorResponse("Delete fail", nil)
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Delete successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func GetCategoryList(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	_db := db.Connect()
	var categories []md.Category
	_db.Find(&categories)
	var response = presenters.BuildResponse(categories)
	json.NewEncoder(w).Encode(response)
}
