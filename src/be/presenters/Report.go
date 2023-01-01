package presenters

import (
	"time"
)

type Report struct {
	Id            string    `gorm:"primaryKey" json:"id"`
	UserId        string    `json:"user_id"`
	User          User      `gorm:"foreignKey:UserId" json:"user"`
	Title         string    `json:"title"`
	ReplyReportId string    `json:"reply_report_id"`
	Content       string    `json:"content"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}
