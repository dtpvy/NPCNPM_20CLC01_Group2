package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func ProductRouter(router *httprouter.Router) {
	router.GET("/product/:id", mid.AddHeader(controllers.GetProductDetail))
	// router.GET("/product/:id", controllers.GetProductDetail)
	// router.GET("/suggest_product", controllers.GetProductDetail)
	// router.PUT("/product/add_to_cart", controllers.AddProductToCart)
	// router.PUT("/product/update_cart", controllers.UpdateProductCart)
	// router.DELETE("/product/remove_cart", controllers.RemoveProductCart)
}
