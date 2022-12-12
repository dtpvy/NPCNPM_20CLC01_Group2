package controllers

// func GetProductDetail(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
// 	w.Header().Set("Content-Type", "application/json")
// 	sellerName := ps.ByName("seller_name")
// 	_db := db.Connect()
// 	var  []Collection
// 	err := _db.Table("users").Select("*").Joins("left join collections on collections.seller_id = users.id").Where("users.seller_name = ?", sellerName).Order("collections.created_at asc").Scan(&collections).Error
// 	if err != nil {
// 		w.WriteHeader(502)
// 		var response = md.BuildErrorResponse("Server error", nil)
// 		json.NewEncoder(w).Encode(response)
// 	} else {
// 		var response = md.BuildResponse(collections)
// 		json.NewEncoder(w).Encode(response)
// 	}
// }
