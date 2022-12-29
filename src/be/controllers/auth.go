package controllers

import (
	"encoding/json"
	"fmt"
	db "main/database"
	md "main/models"
	"main/presenters"
	uts "main/utils"
	"net/http"
	"strings"

	"github.com/golang-jwt/jwt"
	"github.com/julienschmidt/httprouter"
	"golang.org/x/crypto/bcrypt"
)

type AuthResponse struct {
	User        presenters.User `json:"user"`
	AccessToken string          `json:"access_token"`
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
	var user md.User

	_db.Where("email = ?", payload["email"]).First(&user)

	if CheckPasswordHash(payload["password"], user.Password) {
		res := AuthResponse{User: uts.MappingUserResponse(user), AccessToken: presenters.GenerateToken(user.Id)}
		var response = presenters.BuildResponse(res)
		json.NewEncoder(w).Encode(response)
	} else {
		w.WriteHeader(401)
		var response = presenters.BuildErrorResponse("Account is invalid", nil)
		json.NewEncoder(w).Encode(response)
		return
	}
}

func LoginAdmin(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	payload := make(map[string]string)
	err := json.NewDecoder(r.Body).Decode(&payload)
	db.CheckErr(err)
	_db := db.Connect()
	var user md.User
	defaultId := "4d94422a-5471-4828-a122-dcf2ad249e7a"
	_db.Where("email = ?", payload["email"]).First(&user)
	fmt.Println(user, defaultId)
	if CheckPasswordHash(payload["password"], user.Password) && user.Id == defaultId {
		res := AuthResponse{User: uts.MappingUserResponse(user), AccessToken: presenters.GenerateAdminToken(user.Id)}
		var response = presenters.BuildResponse(res)
		json.NewEncoder(w).Encode(response)
	} else {
		w.WriteHeader(401)
		var response = presenters.BuildErrorResponse("Account is invalid", nil)
		json.NewEncoder(w).Encode(response)
		return
	}
}

func Register(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	payload := make(map[string]string)
	err := json.NewDecoder(r.Body).Decode(&payload)
	db.CheckErr(err)
	password, _ := payload["password"]
	email, _ := payload["email"]
	if password == "" || email == "" {
		var response = presenters.BuildErrorResponse("Missing information", nil)
		json.NewEncoder(w).Encode(response)
	} else {
		_db := db.Connect()
		var users []md.User
		_db.Where("email = ?", email).Find(&users)
		if len(users) > 0 {
			w.WriteHeader(409)
			var response = presenters.BuildErrorResponse("Email already exists", nil)
			json.NewEncoder(w).Encode(response)
			return
		}
		user := md.User{Email: email, Password: uts.HashPassword(password)}
		err := _db.Create(&user).Error
		if err != nil {
			w.WriteHeader(502)
			var response = presenters.BuildErrorResponse("Server error", nil)
			json.NewEncoder(w).Encode(response)
			return
		}
		var res = AuthResponse{User: uts.MappingUserResponse(user), AccessToken: presenters.GenerateToken(user.Id)}
		var response = presenters.BuildResponse(res)
		json.NewEncoder(w).Encode(response)
	}
}

func RefreshToken(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	claims := &presenters.Claims{}
	payload := make(map[string]string)
	err := json.NewDecoder(r.Body).Decode(&payload)
	tknStr := payload["access-token"]
	tkn, err := jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
		return presenters.JwtKey, nil
	})

	if err != nil || !tkn.Valid {
		if strings.Contains(err.Error(), "token is expired") {
			payload["access-token"] = presenters.GenerateToken(claims.UserId)
			var response = presenters.BuildResponse(payload)
			json.NewEncoder(w).Encode(response)
			return
		}
		w.WriteHeader(http.StatusUnauthorized)
		var response = presenters.BuildMessageResponse("User authentication failed")
		json.NewEncoder(w).Encode(response)
		return
	}
	var response = presenters.BuildResponse(payload)
	json.NewEncoder(w).Encode(response)
}
