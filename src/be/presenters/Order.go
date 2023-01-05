package presenters

import "time"

type Order struct {
	Id        string    `gorm:"primaryKey" json:"id"`
	UserId    string    `json:"user_id"`
	User      User      `gorm:"foreignKey:UserId" json:"user"`
	Address   string    `json:"address"`
	Phone     string    `json:"phone"`
	Status    string    `json:"status"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
