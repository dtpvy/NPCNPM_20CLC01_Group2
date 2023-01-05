package md

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	Id         string    `gorm:"primaryKey" json:"id"`
	Fullname   string    `json:"fullname"`
	SellerName string    `json:"seller_name"`
	Email      string    `json:"email"`
	Image      string    `json:"image"`
	Phone      string    `json:"phone"`
	Address    string    `json:"address"`
	Password   string    `json:"-"`
	CreatedAt  time.Time `json:"created_at"`
	UpdatedAt  time.Time `json:"updated_at"`
}

func (u *User) BeforeCreate(tx *gorm.DB) (err error) {
	u.Id = uuid.New().String()
	return
}
