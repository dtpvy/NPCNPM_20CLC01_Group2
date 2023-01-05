package presenters

type Cart struct {
	Sellers  []Seller `json:"sellers"`
	Total    int      `json:"total"`
	Selected int      `json:"selected"`
}

type CartItem struct {
	Id          string `json:"id"`
	Name        string `json:"name"`
	Image       string `json:"image"`
	Quantity    int    `json:"quantity"`
	Description string `json:"description"`
	Price       int    `json:"price"`
	OldPrice    int    `json:"old_price"`
	IsSelected  bool   `json:"is_selected"`
}

type Seller struct {
	Products []CartItem `json:"items"`
	Seller   User       `json:"seller"`
	Total    int        `json:"total"`
	Selected int        `json:"selected"`
}
