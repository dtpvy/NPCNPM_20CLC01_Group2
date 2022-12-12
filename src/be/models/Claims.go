package md

import (
	"time"

	"github.com/golang-jwt/jwt/v4"
)

var jwtKey = []byte("my_secret_key")

type Claims struct {
	UserId string `json:"id"`
	jwt.RegisteredClaims
}

func GenerateToken(UserID string) string {
	expirationTime := time.Now().Add(30 * time.Minute)
	claims := &Claims{
		UserId: UserID,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, _ := token.SignedString(jwtKey)
	return tokenString
}
