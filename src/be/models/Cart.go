package md

type CartInfo struct {
	Carts    []Cart `json:"carts"`
	Total    int    `json:"total"`
	Selected int    `json:"selected"`
}

type ProductCart struct {
	Product    Product `json:"product"`
	IsSelected bool    `json:"is_selected"`
}

type Cart struct {
	UserId     string  `json:"user_id"`
	ProductId  string  `json:"product_id"`
	Product    Product `gorm:"foreignKey:ProductId" json:"product"`
	Quantity   int     `json:"quantity"`
	IsSelected bool    `json:"is_selected"`
}
