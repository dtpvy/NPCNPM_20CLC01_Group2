package md

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Category struct {
	Id        string    `gorm:"primaryKey" json:"id"`
	Name      string    `json:"name"`
	Title     string    `json:"title"`
	Image     string    `json:"image"`
	Products  []Product `gorm:"foreignKey:CategoryId" json:"-"`
	Status    string    `json:"status"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

func (u *Category) BeforeCreate(tx *gorm.DB) (err error) {
	u.Id = uuid.New().String()
	u.Status = "inactive"
	return
}
