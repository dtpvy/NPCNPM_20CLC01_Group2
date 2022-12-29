package mid

import (
	"context"
	"encoding/json"
	"main/presenters"
	"net/http"

	"github.com/golang-jwt/jwt"
	"github.com/julienschmidt/httprouter"
)

func VerifyJWT(next httprouter.Handle) httprouter.Handle {
	return httprouter.Handle(func(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
		claims := &presenters.Claims{}
		tknStr := r.Header.Get("access-token")
		tkn, err := jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
			return presenters.JwtKey, nil
		})
		if err != nil || !tkn.Valid {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusUnauthorized)
			var response = presenters.BuildMessageResponse("User authentication failed")
			json.NewEncoder(w).Encode(response)
			return
		}
		ctx := context.WithValue(r.Context(), "user_id", claims.UserId)
		next(w, r.WithContext(ctx), p)
	})
}

const ADMIN_ID = "4d94422a-5471-4828-a122-dcf2ad249e7a"

func VerifyAdminJWT(next httprouter.Handle) httprouter.Handle {
	return httprouter.Handle(func(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
		claims := &presenters.Claims{}
		tknStr := r.Header.Get("access-token")
		tkn, err := jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
			return presenters.JwtKey, nil
		})
		if err != nil || !tkn.Valid {
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusUnauthorized)
			var response = presenters.BuildMessageResponse("User authentication failed")
			json.NewEncoder(w).Encode(response)
			return
		}
		if claims.UserId != ADMIN_ID {
			var response = presenters.BuildMessageResponse("User authentication failed")
			json.NewEncoder(w).Encode(response)
			return
		}
		ctx := context.WithValue(r.Context(), "user_id", claims.UserId)
		next(w, r.WithContext(ctx), p)
	})
}
