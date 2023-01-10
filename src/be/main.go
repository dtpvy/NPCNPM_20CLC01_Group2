package main

import (
	"fmt"
	"main/routes"
	"net/http"

	"github.com/julienschmidt/httprouter"
	_ "github.com/lib/pq"
	"github.com/rs/cors"
)

func main() {
	router := httprouter.New()
	routes.AuthRouter(router)
	routes.UserRouter(router)
	routes.StoreRouter(router)
	routes.ProductRouter(router)
	routes.CaterodyRouter(router)
	routes.CartRouter(router)
	routes.OrderRouter(router)
	routes.ReportRouter(router)
	// router.POST("/auth/register", routes.Register)
	// router.GET("/home/category", routes.GetCategories)
	// router.GET("/home/product", routes.GetProductSuggestion)
	// router.GET("/home/product/", routes.Register)

	fmt.Println("Server start with port 8080")
	handler := cors.Default().Handler(router)
	http.ListenAndServe(":8080", handler)
}
