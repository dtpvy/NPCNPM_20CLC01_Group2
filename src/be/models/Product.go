package md

import "time"

type Product struct {
	Id           string    `json:"id"`
	SellerId     string    `json:"email"`
	CategoryId   string    `json:"category_id"`
	CollectionId string    `json:"collection_id"`
	Name         string    `json:"name"`
	Quantity     string    `json:"quantity"`
	Description  string    `json:"description"`
	Price        int       `json:"price"`
	OldPrice     int       `json:"old_price"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}
