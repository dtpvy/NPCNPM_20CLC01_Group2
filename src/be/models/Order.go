package md

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Order struct {
	Id            string         `gorm:"primaryKey" json:"id"`
	UserId        string         `json:"user_id"`
	User          User           `gorm:"foreignKey:UserId" json:"user"`
	OrderItems    []OrderItem    `gorm:"foreignKey:OrderId" json:"-"`
	OrderPackages []OrderPackage `gorm:"foreignKey:OrderId" json:"packages"`
	Total         int            `json:"total"`
	Address       string         `json:"address"`
	Phone         string         `json:"phone"`
	Status        string         `json:"status"`
	CreatedAt     time.Time      `json:"created_at"`
	UpdatedAt     time.Time      `json:"updated_at"`
}

func (u *Order) BeforeCreate(tx *gorm.DB) (err error) {
	u.Id = uuid.New().String()
	return
}
