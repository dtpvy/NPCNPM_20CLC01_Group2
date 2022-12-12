package routes

import (
	"main/controllers"

	"github.com/julienschmidt/httprouter"
)

func AuthRouter(router *httprouter.Router) {
	router.POST("/auth/login", controllers.Login)
	router.POST("/auth/register", controllers.Register)
}
