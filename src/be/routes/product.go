package routes

import (
	"main/controllers"

	"github.com/julienschmidt/httprouter"
)

func ProductRouter(router *httprouter.Router) {

	router.GET("/store/product", controllers.GetProductCollection)

}
