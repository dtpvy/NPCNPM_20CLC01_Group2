package main

import (
	"main/routes"
	"net/http"

	"github.com/julienschmidt/httprouter"
	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "123"
	dbname   = "webanhang"
)

func main() {
	router := httprouter.New()

	router.POST("/auth/login", routes.Login)
	router.POST("/auth/register", routes.Register)

	http.ListenAndServe(":8080", router)
}
