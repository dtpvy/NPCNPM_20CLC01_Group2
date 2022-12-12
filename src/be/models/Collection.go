package md

import "time"

type Collection struct {
	Id        string    `json:"id"`
	Name      string    `json:"name"`
	Image     string    `json:"image"`
	SellerId  string    `json:"seller_id"`
	Products  []Product `gorm:"foreignKey:CollectionId" json:"products"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
