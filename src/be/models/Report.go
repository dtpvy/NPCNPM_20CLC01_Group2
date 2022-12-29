package md

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Report struct {
	Id            string      `gorm:"primaryKey" json:"id"`
	UserId        string      `json:"user_id"`
	User          User        `gorm:"foreignKey:UserId" json:"user"`
	ReplyReportId string      `json:"reply_report_id"`
	ReplyReport   interface{} `json:"reply_report,omitempty"`
	Title         string      `json:"title"`
	Content       string      `json:"content"`
	CreatedAt     time.Time   `json:"created_at"`
	UpdatedAt     time.Time   `json:"updated_at"`
}

func (u *Report) BeforeCreate(tx *gorm.DB) (err error) {
	if u.Id == "" {
		u.Id = uuid.New().String()
	}
	return
}
