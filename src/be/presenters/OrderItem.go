package presenters

import "time"

type OrderItem struct {
	OrderId   string    `gorm:"primaryKey" json:"order_id"`
	SellerId  string    `gorm:"primaryKey" json:"seller_id"`
	ProductId string    `json:"product_id"`
	Quantity  int       `json:"quantity"`
	Price     int       `json:"price"`
	Image     string    `json:"image"`
	Name      string    `json:"name"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
