package md

import (
	"main/presenters"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Collection struct {
	Id        string               `gorm:"primaryKey" json:"id"`
	Name      string               `json:"name"`
	Image     string               `json:"image"`
	SellerId  string               `json:"seller_id"`
	Seller    User                 `gorm:"foreignKey:SellerId" json:"-"`
	Products  []presenters.Product `gorm:"many2many:collection_details;" json:"products"`
	CreatedAt time.Time            `json:"created_at"`
	UpdatedAt time.Time            `json:"updated_at"`
}

func (u *Collection) BeforeCreate(tx *gorm.DB) (err error) {
	u.Id = uuid.New().String()
	return
}
