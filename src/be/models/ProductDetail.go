package md

import (
	"time"
)

type ProductDetail struct {
	Id          string    `json:"id"`
	Name        string    `json:"name"`
	Image       string    `json:"image"`
	Quantity    int       `json:"quantity"`
	Description string    `json:"description"`
	Price       int       `json:"price"`
	OldPrice    int       `json:"old_price"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}
