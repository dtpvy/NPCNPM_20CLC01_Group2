package md

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Product struct {
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

func (u *Product) BeforeCreate(tx *gorm.DB) (err error) {
	u.Id = uuid.New().String()
	return
}
