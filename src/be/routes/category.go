package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func CaterodyRouter(router *httprouter.Router) {
	router.POST("/category/create", mid.AddHeader(mid.VerifyAdminJWT(controllers.CreateCategory)))
	router.PUT("/category/update", mid.AddHeader(mid.VerifyAdminJWT(controllers.UpdateCategory)))
	router.DELETE("/category/delete/:id", mid.AddHeader(mid.VerifyAdminJWT(controllers.DeleteCategory)))
	router.GET("/category/list", mid.AddHeader(controllers.GetCategoryList))
}
