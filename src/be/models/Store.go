package md

type Store struct {
	User       User         `json:"user"`
	Collection []Collection `gorm:"foreignKey:SellerId" json:"store"`
}
