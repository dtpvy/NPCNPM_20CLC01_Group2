package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func AuthRouter(router *httprouter.Router) {
	router.POST("/auth/login", mid.AddHeader(controllers.Login))
	router.POST("/auth/register", mid.AddHeader(controllers.Register))
}
