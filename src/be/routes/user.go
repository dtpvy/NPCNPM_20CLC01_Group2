package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func UserRouter(router *httprouter.Router) {
	router.GET("/user_info", mid.VerifyJWT(controllers.GetUserInfo))
	router.GET("/user/requests", mid.VerifyJWT(controllers.Login))
	router.GET("/user/orders", mid.VerifyJWT(controllers.Login))
	router.PUT("/user_info/update", mid.VerifyJWT(controllers.UpdateUserInfo))
}
