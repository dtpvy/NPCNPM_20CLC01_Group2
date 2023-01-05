package controllers

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"main/presenters"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

func CreateReport(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()

	if payload["reply_id"] == nil {
		report := md.Report{
			UserId:  userId.(string),
			Title:   payload["title"].(string),
			Content: payload["content"].(string),
		}
		err := _db.Omit("ReplyReportId", "ParentReportId").Create(&report).Error
		if err != nil {
			var response = presenters.BuildMessageResponse("Create report failure")
			json.NewEncoder(w).Encode(response)
		} else {
			_db.Preload(clause.Associations).Where("id = ?", report.Id).First(&report)
			var response = presenters.BuildResponse(report)
			json.NewEncoder(w).Encode(response)
		}
	} else {
		report := md.Report{
			UserId:         userId.(string),
			ParentReportId: payload["reply_id"].(string),
			Title:          payload["title"].(string),
			Content:        payload["content"].(string),
		}
		err := _db.Omit("ReplyReportId").Create(&report).Error
		if err != nil {
			var response = presenters.BuildMessageResponse("Create report failure")
			json.NewEncoder(w).Encode(response)
		} else {
			_db.Model(&md.Report{}).Where("id = ?", report.ParentReportId).Update("reply_report_id", report.Id)
			_db.Preload(clause.Associations).Where("id = ?", report.Id).First(&report)
			var response = presenters.BuildResponse(report)
			json.NewEncoder(w).Encode(response)
		}
	}
}

func UpdateReport(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	id := ps.ByName("id")
	report := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&report)
	_db := db.Connect()
	var _report md.Report
	_db.Where("id = ?", id).First(&_report)
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
	_db := db.Connect()
	var report md.Report
	_db.Where("id = ? and user_id = ?", id, userId).First(&report)
	if report.ReplyReportId == "" {
		err := _db.Where("id = ? and user_id = ?", report.Id, report.UserId).Delete(&md.Report{}).Error
		if err != nil {
			var response = presenters.BuildMessageResponse("Delete report failure")
			json.NewEncoder(w).Encode(response)
		} else {
			var response = presenters.BuildMessageResponse("Delete report successfully")
			json.NewEncoder(w).Encode(response)
		}
	} else {
		_db.Model(&md.Report{}).Where("id = ?", report.Id).Update("reply_report_id", gorm.Expr("NULL"))
		// _db.Where("id = ?", report.ReplyReportId).Update("parent_report_id", gorm.Expr("NULL"))
		_db.Where("id = ?", report.ReplyReportId).Delete(&md.Report{})
		err := _db.Where("id = ? and user_id = ?", report.Id, report.UserId).Delete(&md.Report{}).Error
		if err != nil {
			var response = presenters.BuildMessageResponse("Delete report failure")
			json.NewEncoder(w).Encode(response)
		} else {
			var response = presenters.BuildMessageResponse("Delete report successfully")
			json.NewEncoder(w).Encode(response)
		}
	}
}

func GetReport(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id := ps.ByName("id")
	userId := r.Context().Value("user_id")
	_db := db.Connect()
	var report md.Report
	_db.Preload("User").Preload("ReplyReport").Preload("ReplyReport.User").Where("id = ? and user_id = ?", id, userId).First(&report)
	var response = presenters.BuildResponse(report)
	json.NewEncoder(w).Encode(response)
}

func GetReportList(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	_db := db.Connect()
	var reports []md.Report
	_db.Preload("User").Preload("ReplyReport").Preload("ReplyReport.User").Where("user_id = ? and parent_report_id IS NULL", userId).Find(&reports)
	var response = presenters.BuildResponse(reports)
	json.NewEncoder(w).Encode(response)
}
