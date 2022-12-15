package controllers

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func GetProductDetail(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")
	id := ps.ByName("id")
	_db := db.Connect()
	var product md.ProductDetail
	_db.Model(md.Product{}).Preload("Category").Preload("User").Where("id = ?", id).First(&product)
	var response = md.BuildResponse(product)
	json.NewEncoder(w).Encode(response)
}

func GetProductSearch(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")
	id := ps.ByName("id")
	_db := db.Connect()
	var product md.ProductDetail
	_db.Model(md.Product{}).Preload("Category").Preload("User").Where("id = ?", id).First(&product)
	var response = md.BuildResponse(product)
	json.NewEncoder(w).Encode(response)
}
