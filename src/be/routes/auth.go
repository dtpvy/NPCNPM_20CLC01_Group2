package routes

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"main/utils"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/google/uuid"
	"github.com/julienschmidt/httprouter"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte("my_secret_key")

type AuthResponse struct {
	User        md.User `json:"user"`
	AccessToken string  `json:"access_token"`
}

type Claims struct {
	UserId string `json:"id"`
	jwt.RegisteredClaims
}

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func Login(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")
	payload := make(map[string]string)
	err := json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	rows, err := _db.Query(`SELECT id, email, password FROM public."USER" WHERE email=$1`, payload["email"])
	db.CheckErr(err)

	var users []md.User
	var password string
	for rows.Next() {
		var id string

		var email string

		err = rows.Scan(&id, &email, &password)
		db.CheckErr(err)
		users = append(users, md.User{Id: id, Email: email})
	}

	if len(users) == 1 && CheckPasswordHash(payload["password"], password) {
		expirationTime := time.Now().Add(5 * time.Minute)
		claims := &Claims{
			UserId: users[0].Id,
			RegisteredClaims: jwt.RegisteredClaims{
				ExpiresAt: jwt.NewNumericDate(expirationTime),
			},
		}
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
		tokenString, err := token.SignedString(jwtKey)
		db.CheckErr(err)
		res := AuthResponse{User: users[0], AccessToken: tokenString}
		var response = md.BuildResponse(res)
		json.NewEncoder(w).Encode(response)
	} else {
		w.WriteHeader(401)
		var response = md.BuildErrorResponse("Account is invalid", nil)
		json.NewEncoder(w).Encode(response)
		return
	}
}

func Register(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")
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
		rows, _ := _db.Query(`SELECT id, name, fullname, email, phone, address_id, created_at, updated_at FROM public."USER" WHERE email=$1`, email)
		users := utils.GetUserList(rows)
		if len(users) > 0 {
			w.WriteHeader(409)
			var response = md.BuildErrorResponse("Email already exists", nil)
			json.NewEncoder(w).Encode(response)
			return
		}

		password, _ = HashPassword(password)
		uuid := uuid.New()
		_time := time.Now()
		_, err := _db.Exec(`INSERT INTO public."USER"(id, password, email, created_at, updated_at) VALUES ($1, $2, $3, $4, $5)`, uuid.String(), password, email, _time, _time)
		db.CheckErr(err)
		var response = md.BuildResponse(nil)
		json.NewEncoder(w).Encode(response)
	}
}
