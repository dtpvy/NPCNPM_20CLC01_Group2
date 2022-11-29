package md

import "time"

type Collection struct {
	Id        string    `json:"id"`
	Name      string    `json:"name"`
	SellerId  string    `json:"seller_id"`
	Product   []Product `json:"product"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
