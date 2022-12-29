package controllers

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"main/presenters"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"gorm.io/gorm/clause"
)

func CreateReport(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()

	report := md.Report{
		UserId:        userId.(string),
		ReplyReportId: payload["reply_id"].(string),
		Title:         payload["title"].(string),
		Content:       payload["content"].(string),
	}
	err := _db.Create(&report).Error
	if err != nil {
		var response = presenters.BuildMessageResponse("Create report failure")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Create report successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func UpdateReport(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	report := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&report)
	_db := db.Connect()
	var _report md.Report
	_db.Where("id = ?", report["id"]).First(&_report)
	if _report.UserId == userId {
		_db.Model(md.Report{}).Where("id = ?", _report.Id).Updates(report)
		var response = presenters.BuildMessageResponse("Update report successfully")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Update report failed. Account is invalid")
		json.NewEncoder(w).Encode(response)
	}
}

func DeleteReport(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	id := ps.ByName("id")
	report := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&report)
	_db := db.Connect()
	err := _db.Where("id = ? and user_id", id, userId).Delete(&md.Report{}).Error
	if err != nil {
		var response = presenters.BuildMessageResponse("Delete report failure")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Delete report successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func GetReport(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id := ps.ByName("id")
	userId := r.Context().Value("user_id")
	_db := db.Connect()
	var report md.Report
	_db.Preload(clause.Associations).Where("id = ? and user_id = ?", id, userId).First(&report)
	if report.ReplyReportId != "" {
		var replyReport md.Report
		_db.Preload(clause.Associations).Where("id = ?", id).First(&replyReport)
		report.ReplyReport = replyReport
	}
	var response = presenters.BuildResponse(report)
	json.NewEncoder(w).Encode(response)
}
