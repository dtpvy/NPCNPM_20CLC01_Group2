package presenters

import (
	"time"
)

type User struct {
	Id         string    `json:"id"`
	Fullname   string    `json:"fullname"`
	SellerName string    `json:"seller_name"`
	Email      string    `json:"email"`
	Image      string    `json:"image"`
	Phone      string    `json:"phone"`
	Address    string    `json:"address"`
	CreatedAt  time.Time `json:"created_at"`
	UpdatedAt  time.Time `json:"updated_at"`
}
