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
	CategoryId  string    `json:"category_id"`
	Category    Category  `gorm:"foreignKey:CategoryId" json:"category,omitempty"`
	CreatorId   string    `json:"creator_id"`
	Creator     User      `gorm:"foreignKey:CreatorId" json:"creator,omitempty"`
	Description string    `json:"description"`
	Price       int       `json:"price"`
	OldPrice    int       `json:"old_price"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

func (u *Product) BeforeCreate(tx *gorm.DB) (err error) {
	if u.Id == "" {
		u.Id = uuid.New().String()
	}
	return
}
