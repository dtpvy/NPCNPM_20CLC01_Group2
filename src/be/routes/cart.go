package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func CartRouter(router *httprouter.Router) {
	router.GET("/cart", mid.AddHeader(mid.VerifyJWT(controllers.GetCart)))
	router.POST("/cart/add_product", mid.AddHeader(mid.VerifyJWT(controllers.AddProductToCart)))
	router.PUT("/cart/update_product", mid.AddHeader(mid.VerifyJWT(controllers.UpdateProductCart)))
	router.DELETE("/cart/remove_product", mid.AddHeader(mid.VerifyJWT(controllers.RemoveProductCart)))
	router.DELETE("/cart/clean", mid.AddHeader(mid.VerifyJWT(controllers.CleanCart)))
}
