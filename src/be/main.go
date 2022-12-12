package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	server := echo.New()

	server.GET("/", hello)

	server.Logger.Fatal(server.Start(":8080"))
}

func hello(c echo.Context) error {
	return c.String(http.StatusOK, "hello world!")
}
