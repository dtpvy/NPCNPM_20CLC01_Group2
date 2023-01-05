package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func UserRouter(router *httprouter.Router) {
	router.GET("/user_info", mid.AddHeader(mid.VerifyJWT(controllers.GetUserInfo)))
	router.GET("/user/requests", mid.AddHeader(mid.VerifyJWT(controllers.Login)))
	router.GET("/user/orders", mid.AddHeader(mid.VerifyJWT(controllers.GetUserOrders)))
	router.GET("/seller/orders", mid.AddHeader(mid.VerifyJWT(controllers.GetSellerOrders)))
	router.PUT("/user_info/update", mid.AddHeader(mid.VerifyJWT(controllers.UpdateUserInfo)))
}
