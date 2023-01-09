package controllers

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"main/presenters"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

func GetProductDetail(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id := ps.ByName("id")
	_db := db.Connect()
	var product md.Product
	_db.Model(md.Product{}).Preload("Category").Preload("User").Where("id = ?", id).First(&product)
	var response = presenters.BuildResponse(product)
	json.NewEncoder(w).Encode(response)
}

func GetProductSearch(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	search := r.URL.Query().Get("q")
	catId := r.URL.Query().Get("category")
	sortType := r.URL.Query().Get("st")
	sort := r.URL.Query().Get("sort")
	page, _ := strconv.ParseInt(r.URL.Query().Get("page"), 10, 64)
	limit, _ := strconv.ParseInt(r.URL.Query().Get("limit"), 10, 64)
	if sortType == "" {
		sortType = "created_at"
	}
	if sort == "" {
		sort = "desc"
	}
	order := sortType + " " + sort
	_db := db.Connect()
	var product []presenters.Product
	_db.Model(presenters.Product{}).Where("name LIKE ?", "%"+search+"%").Where("category_id = ?", catId).Order(order).Offset(int(page * limit)).Limit(int(limit)).Find(&product)
	var response = presenters.BuildResponse(product)
	json.NewEncoder(w).Encode(response)
}
