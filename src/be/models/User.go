package md

import "time"

type User struct {
	Id        string    `json:"id"`
	Name      string    `json:"name"`
	FullName  string    `json:"fullname"`
	Email     string    `json:"password"`
	Image     string    `json:"image"`
	Phone     string    `json:"phone"`
	AddressId string    `json:"address_id"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
