package routes

import (
	"main/controllers"

	"github.com/julienschmidt/httprouter"
)

func RequestRouter(router *httprouter.Router) {
	router.POST("/request/create", controllers.GetProductDetail)
	router.PUT("/request/edit", controllers.GetProductDetail)
	router.DELETE("/request/remove", controllers.GetProductDetail)
}
