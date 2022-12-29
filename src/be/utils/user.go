package uts

import (
	md "main/models"
	"main/presenters"

	"golang.org/x/crypto/bcrypt"
)

func HashPassword(password string) string {
	bytes, _ := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes)
}

func MappingUserResponse(user md.User) presenters.User {
	return presenters.User{
		Id:         user.Id,
		Email:      user.Email,
		Image:      user.Image,
		SellerName: user.SellerName,
		Fullname:   user.Fullname,
		Phone:      user.Phone,
		Address:    user.Address,
		CreatedAt:  user.CreatedAt,
		UpdatedAt:  user.UpdatedAt,
	}
}
