package routes

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"net/http"
	"time"

	"github.com/julienschmidt/httprouter"
)

func GetCategories(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")
	_db := db.Connect()
	rows, err := _db.Query(`SELECT * FROM public."CATEGORY"`)
	db.CheckErr(err)

	var categories []md.Product
	for rows.Next() {
		var id string
		var name string
		var createdAt time.Time
		var updatedAt time.Time

		err = rows.Scan(&id, &name, &createdAt, &updatedAt)
		db.CheckErr(err)
		categories = append(categories, md.Product{Id: id, Name: name, CreatedAt: createdAt, UpdatedAt: updatedAt})
	}

	var response = md.BuildResponse(categories)
	json.NewEncoder(w).Encode(response)
}
