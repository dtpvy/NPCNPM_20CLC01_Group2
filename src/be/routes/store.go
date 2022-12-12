package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func StoreRouter(router *httprouter.Router) {
	router.POST("/store/collection/create", mid.VerifyJWT(controllers.CreateCollection))
	router.POST("/store/product/create", mid.VerifyJWT(controllers.CreateProduct))
	router.GET("/store/product", controllers.GetProductCollection)
	router.GET("/store/collection_list/:seller_name", controllers.GetListCollection)
	router.GET("/store/info/:seller_name", controllers.GetStore)
	router.PUT("/store/product/update", controllers.Login)
	router.PUT("/store/collection_info/update", mid.VerifyJWT(controllers.UpdateCollectionInformation))
	router.POST("/store/collection_info/add_product", mid.VerifyJWT(controllers.AddProductCollection))
	router.DELETE("/store/collection_info/delete_product", mid.VerifyJWT(controllers.DeleteProductCollection))
	router.DELETE("/store/collection", mid.VerifyJWT(controllers.DeleteCollection))
}
