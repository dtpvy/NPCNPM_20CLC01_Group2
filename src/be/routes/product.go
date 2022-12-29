package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func ProductRouter(router *httprouter.Router) {
	router.GET("/product/detail/:id", mid.AddHeader(controllers.GetProductDetail))
	router.GET("/product/search", mid.AddHeader(controllers.GetProductSearch))
}
