package db

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "123"
	dbname   = "database"
)

func CheckErr(err error) {
	if err != nil {
		panic(err)
	}
}

func Connect() *sql.DB {
	dev := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	prod := "postgres://admin:TCRNYJdkQhyB7b13XBUagBfYQ5oBM0Dy@dpg-ce253hta4996ndufp8v0-a.oregon-postgres.render.com/database_917j"
	env := "prod"
	if env == "dev" {
		db, err := sql.Open("postgres", dev)
		CheckErr(err)

		return db
	} else {
		db, err := sql.Open("postgres", prod)
		CheckErr(err)

		return db
	}
}
