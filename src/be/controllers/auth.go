package controllers

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"net/http"
	"time"

	"github.com/google/uuid"
	"github.com/julienschmidt/httprouter"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type AuthResponse struct {
	User        md.User `json:"user"`
	AccessToken string  `json:"access_token"`
}

type User struct {
	Id         string    `json:"id"`
	Fullname   string    `json:"fullname"`
	SellerName string    `json:"seller_name"`
	Email      string    `json:"email"`
	Image      string    `json:"image"`
	Phone      string    `json:"phone"`
	Address    string    `json:"address"`
	Password   string    `json:"password"`
	CreatedAt  time.Time `json:"created_at"`
	UpdatedAt  time.Time `json:"updated_at"`
}

func (u *User) BeforeCreate(tx *gorm.DB) (err error) {
	u.Id = uuid.New().String()
	return
}

func HashPassword(password string) string {
	bytes, _ := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes)
}

func MappingUserResponse(user User) md.User {
	return md.User{
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

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func Login(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	payload := make(map[string]string)
	err := json.NewDecoder(r.Body).Decode(&payload)
	db.CheckErr(err)
	_db := db.Connect()
	var user User

	_db.Where("email = ?", payload["email"]).First(&user)

	if CheckPasswordHash(payload["password"], user.Password) {
		res := AuthResponse{User: MappingUserResponse(user), AccessToken: md.GenerateToken(user.Id)}
		var response = md.BuildResponse(res)
		json.NewEncoder(w).Encode(response)
	} else {
		w.WriteHeader(401)
		var response = md.BuildErrorResponse("Account is invalid", nil)
		json.NewEncoder(w).Encode(response)
		return
	}
	db.Close(_db)
}

func Register(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	payload := make(map[string]string)
	err := json.NewDecoder(r.Body).Decode(&payload)
	db.CheckErr(err)
	password, _ := payload["password"]
	email, _ := payload["email"]
	if password == "" || email == "" {
		var response = md.BuildErrorResponse("Missing information", nil)
		json.NewEncoder(w).Encode(response)
	} else {
		_db := db.Connect()
		var users []User
		_db.Where("email = ?", email).Find(&users)
		if len(users) > 0 {
			w.WriteHeader(409)
			var response = md.BuildErrorResponse("Email already exists", nil)
			json.NewEncoder(w).Encode(response)
			return
		}
		user := User{Email: email, Password: HashPassword(password)}
		err := _db.Create(&user).Error
		if err != nil {
			w.WriteHeader(502)
			var response = md.BuildErrorResponse("Server error", nil)
			json.NewEncoder(w).Encode(response)
			return
		}
		var res = AuthResponse{User: MappingUserResponse(user), AccessToken: md.GenerateToken(user.Id)}
		var response = md.BuildResponse(res)
		json.NewEncoder(w).Encode(response)
	}
}
