package utils

import (
	"database/sql"
	db "main/database"
	md "main/models"
	"time"
)

func GetProductById(rows *sql.Rows) md.Product {
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

		err := rows.Scan(&id, &sellerId, &name, &quantity, &description, &price, &oldPrice, &createdAt, &updatedAt, &categoryId)
		db.CheckErr(err)
		product = md.Product{Id: id, SellerId: sellerId, Name: name, Quantity: quantity, Description: description, Price: price, OldPrice: oldPrice, CreatedAt: createdAt, UpdatedAt: updatedAt, CategoryId: categoryId}
	}
	return product
}

func GetProductList(rows *sql.Rows, inCollection bool) []md.Product {
	var products []md.Product
	for rows.Next() {
		var id string
		var sellerId string
		var collectionId string
		var name string
		var quantity string
		var description string
		var price int
		var oldPrice int
		var createdAt time.Time
		var updatedAt time.Time
		var categoryId string
		if inCollection {
			err := rows.Scan(&collectionId, &id, &sellerId, &name, &quantity, &description, &price, &oldPrice, &createdAt, &updatedAt, &categoryId)
			db.CheckErr(err)
		} else {
			err := rows.Scan(&id, &sellerId, &name, &quantity, &description, &price, &oldPrice, &createdAt, &updatedAt, &categoryId)
			db.CheckErr(err)
		}

		products = append(products, md.Product{Id: id, CollectionId: collectionId, SellerId: sellerId, Name: name, Quantity: quantity, Description: description, Price: price, OldPrice: oldPrice, CreatedAt: createdAt, UpdatedAt: updatedAt, CategoryId: categoryId})
	}
	return products
}
