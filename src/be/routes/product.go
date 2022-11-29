package routes

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"net/http"
	"time"

	"github.com/julienschmidt/httprouter"
)

func GetProductSuggestion(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")
	_db := db.Connect()
	rows, err := _db.Query(`SELECT * FROM public."PRODUCT"`)
	db.CheckErr(err)

	var products []md.Product
	for rows.Next() {
		var id string
		var sellerId string
		var name string
		var quantity string
		var description string
		var price int
		var oldPrice int
		var createdAt time.Time
		var updatedAt time.Time
		var categoryId string

		err = rows.Scan(&id, &sellerId, &name, &quantity, &description, &price, &oldPrice, &createdAt, &updatedAt, &categoryId)
		db.CheckErr(err)
		products = append(products, md.Product{Id: id, SellerId: sellerId, Name: name, Quantity: quantity, Description: description, Price: price, OldPrice: oldPrice, CreatedAt: createdAt, UpdatedAt: updatedAt, CategoryId: categoryId})
	}

	var response = md.BuildResponse(products)
	json.NewEncoder(w).Encode(response)
}

func GetProductById(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")
	_db := db.Connect()
	rows, err := _db.Query(`SELECT * FROM public."PRODUCT" WHERE id=$1`, ps.ByName("id"))
	db.CheckErr(err)

	var product md.Product
	for rows.Next() {
		var id string
		var sellerId string
		var name string
		var quantity string
		var description string
		var price int
		var oldPrice int
		var createdAt time.Time
		var updatedAt time.Time
		var categoryId string

		err = rows.Scan(&id, &sellerId, &name, &quantity, &description, &price, &oldPrice, &createdAt, &updatedAt, &categoryId)
		db.CheckErr(err)
		product = md.Product{Id: id, SellerId: sellerId, Name: name, Quantity: quantity, Description: description, Price: price, OldPrice: oldPrice, CreatedAt: createdAt, UpdatedAt: updatedAt, CategoryId: categoryId}
	}

	var response = md.BuildResponse(product)
	json.NewEncoder(w).Encode(response)
}
