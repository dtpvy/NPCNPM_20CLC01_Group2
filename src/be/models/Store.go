package md

type Store struct {
	User       User         `json:"user"`
	Collection []Collection `json:"collection"`
}
