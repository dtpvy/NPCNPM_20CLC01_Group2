package mid

import (
	"context"
	"encoding/json"
	md "main/models"
	"net/http"

	"github.com/golang-jwt/jwt"
	"github.com/julienschmidt/httprouter"
)

var jwtKey = []byte("my_secret_key")

func VerifyJWT(next httprouter.Handle) httprouter.Handle {
	return httprouter.Handle(func(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
		claims := &md.Claims{}
		tknStr := r.Header.Get("access-token")
		tkn, err := jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})
		if err != nil || !tkn.Valid {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusUnauthorized)
			var response = md.BuildMessageResponse("User authentication failed")
			json.NewEncoder(w).Encode(response)
			return
		}
		ctx := context.WithValue(r.Context(), "user_id", claims.UserId)
		next(w, r.WithContext(ctx), p)
	})
}
