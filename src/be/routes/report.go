package routes

import (
	"main/controllers"
	mid "main/middlewares"

	"github.com/julienschmidt/httprouter"
)

func ReportRouter(router *httprouter.Router) {
	router.POST("/report/create", mid.AddHeader(mid.VerifyJWT(controllers.CreateReport)))
	router.PUT("/report/edit/:id", mid.AddHeader(mid.VerifyJWT(controllers.UpdateReport)))
	router.GET("/report/detail/:id", mid.AddHeader(mid.VerifyJWT(controllers.GetReport)))
	router.GET("/report/list", mid.AddHeader(mid.VerifyJWT(controllers.GetReportList)))
	router.DELETE("/report/remove/:id", mid.AddHeader(mid.VerifyJWT(controllers.DeleteReport)))
}
