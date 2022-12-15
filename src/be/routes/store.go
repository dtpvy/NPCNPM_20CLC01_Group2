package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func StoreRouter(router *httprouter.Router) {
	router.POST("/stores/collections", mid.AddHeader(mid.VerifyJWT(controllers.CreateCollection)))
	router.POST("/store/product/create", mid.AddHeader(mid.VerifyJWT(controllers.CreateProduct)))
	router.GET("/store/product", mid.AddHeader(controllers.GetProductCollection))
	router.GET("/store/collection_list/:seller_name", mid.AddHeader(controllers.GetListCollection))
	router.GET("/store/info/:id", mid.AddHeader(controllers.GetStore))
	router.PUT("/store/product/update", mid.AddHeader(mid.VerifyJWT(controllers.UpdateProduct)))
	router.PUT("/store/collection_info/update", mid.AddHeader(mid.VerifyJWT(controllers.UpdateCollectionInformation)))
	router.POST("/store/collection_info/add_product", mid.AddHeader(mid.VerifyJWT(controllers.AddProductCollection)))
	router.DELETE("/store/collection_info/delete_product", mid.AddHeader(mid.VerifyJWT(controllers.DeleteProductCollection)))
	router.DELETE("/store/collection", mid.AddHeader(mid.VerifyJWT(controllers.DeleteCollection)))
}
