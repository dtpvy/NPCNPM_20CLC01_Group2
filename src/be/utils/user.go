package utils

import (
	"database/sql"
	db "main/database"
	md "main/models"
	"time"
)

func GetUser(rows *sql.Rows) md.User {
	var user md.User
	for rows.Next() {
		var id string
		var name string
		var fullname string
		var email string
		var phone string
		var addressId string
		var createdAt time.Time
		var updatedAt time.Time

		err := rows.Scan(&id, &name, &fullname, &email, &phone, &addressId, &createdAt, &updatedAt)
		db.CheckErr(err)
		user = md.User{Id: id, Name: name, FullName: fullname, Email: email, Phone: phone, AddressId: addressId, CreatedAt: createdAt, UpdatedAt: updatedAt}
	}
	return user
}

func GetUserList(rows *sql.Rows) []md.User {
	var users []md.User
	for rows.Next() {
		var id string
		var name string
		var fullname string
		var email string
		var phone string
		var addressId string
		var createdAt time.Time
		var updatedAt time.Time

		err := rows.Scan(&id, &name, &fullname, &email, &phone, &addressId, &createdAt, &updatedAt)
		db.CheckErr(err)
		users = append(users, md.User{Id: id, Name: name, FullName: fullname, Email: email, Phone: phone, AddressId: addressId, CreatedAt: createdAt, UpdatedAt: updatedAt})
	}
	return users
}
