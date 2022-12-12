package db

import (
	"fmt"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "123"
	dbname   = "webanhang"
)

func CheckErr(err error) {
	if err != nil {
		panic(err)
	}
}

func Connect() *gorm.DB {
	env := os.Getenv("ENV")
	dev := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	prod := os.Getenv("DATABASE_PROD")
	fmt.Println(env, prod)
	if env == "dev" {
		db, err := gorm.Open(postgres.Open(dev), &gorm.Config{})
		CheckErr(err)

		return db
	} else {
		db, err := gorm.Open(postgres.Open(prod), &gorm.Config{})
		CheckErr(err)

		return db
	}
}

func Close(db *gorm.DB) {
	dbInstance, _ := db.DB()
	_ = dbInstance.Close()
}
