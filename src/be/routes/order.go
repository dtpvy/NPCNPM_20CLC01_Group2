package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func OrderRouter(router *httprouter.Router) {
	router.POST("/order/create", mid.AddHeader(mid.VerifyJWT(controllers.CreateOrder)))
	router.GET("/order/info/:id", mid.AddHeader(mid.VerifyJWT(controllers.GetOrder)))
	router.PUT("/order/update/:id", mid.AddHeader(mid.VerifyJWT(controllers.UpdateOrder)))
}
