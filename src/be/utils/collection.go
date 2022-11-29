package utils

import (
	"database/sql"
	db "main/database"
	md "main/models"
	"time"
)

func GetCollection(rows *sql.Rows) md.Collection {
	var collection md.Collection
	for rows.Next() {
		var id string
		var name string
		var seller_id string
		var createdAt time.Time
		var updatedAt time.Time

		err := rows.Scan(&id, &seller_id, &name, &createdAt, &updatedAt)
		db.CheckErr(err)
		collection = md.Collection{Id: id, SellerId: seller_id, Name: name, CreatedAt: createdAt, UpdatedAt: updatedAt}
	}
	return collection
}

func GetCollectionList(rows *sql.Rows) []md.Collection {
	var collections []md.Collection
	for rows.Next() {
		var id string
		var name string
		var seller_id string
		var createdAt time.Time
		var updatedAt time.Time

		err := rows.Scan(&id, &seller_id, &name, &createdAt, &updatedAt)
		db.CheckErr(err)
		collections = append(collections, md.Collection{Id: id, SellerId: seller_id, Name: name, CreatedAt: createdAt, UpdatedAt: updatedAt})
	}
	return collections
}
