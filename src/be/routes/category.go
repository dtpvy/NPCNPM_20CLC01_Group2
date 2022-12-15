package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func CaterodyRouter(router *httprouter.Router) {
	router.POST("/category/create", mid.AddHeader(mid.VerifyJWT(controllers.CreateCategory)))
	router.GET("/category_list", mid.AddHeader(controllers.GetCategoryList))
}
