package md

import (
	"time"
)

type OrderPackage struct {
	OrderId    string      `gorm:"primaryKey" json:"order_id"`
	SellerId   string      `gorm:"primaryKey" json:"seller_id"`
	Order      Order       `gorm:"foreignKey:OrderId" json:"-"`
	Seller     User        `gorm:"foreignKey:SellerId" json:"seller"`
	OrderItems []OrderItem `gorm:"ForeignKey:OrderId,SellerId;" json:"items"`
	Status     string      `json:"status"`
	Total      int         `json:"total"`
	CreatedAt  time.Time   `json:"created_at"`
	UpdatedAt  time.Time   `json:"updated_at"`
}
