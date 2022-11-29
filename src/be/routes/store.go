package routes

// import (
// 	"encoding/json"
// 	db "main/database"
// 	md "main/models"
// 	"main/utils"
// 	"net/http"

// 	"github.com/julienschmidt/httprouter"
// )

// func GetStoreById(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
// 	w.Header().Set("Content-Type", "application/json")
// 	_db := db.Connect()
// 	uRows, err := _db.Query(`SELECT * FROM public."USER" WHERE id=$1`, ps.ByName("seller_id"))
// 	db.CheckErr(err)
// 	user := utils.GetUser(uRows)
// 	cRows, err := _db.Query(`SELECT * FROM public."COLLECTION" WHERE seller_id=$1`, ps.ByName("seller_id"))
// 	collections := utils.GetCollectionList(cRows)
// 	pRows, err := _db.Query(`SELECT PR.* FROM public."COLLECTION" AS CO JOIN public."COLLECTION_DETAIL" AS CD ON CO."id" = CD."collection_id" JOIN public."PRODUCT" as PR ON CD."product_id" = PR."id" WHERE CO."seller_id" = $1`, ps.ByName("seller_id"))
// 	products := utils.GetProductList(pRows, true)
// 	collectionDetail := make(map[string][]md.Product)
// 	for i := 0; i < len(products); i++ {
// 		collection_id := products[i].CollectionId
// 		collectionDetail[collection_id] = append(collectionDetail[collection_id], products[i])
// 	}
// 	for i := 0; i < len(collections); i++ {
// 		collections[i].Products = collectionDetail[collections[i].Id]
// 	}
// 	store := md.Store{User: user, Collection: collections}
// 	var response = md.BuildResponse(store)
// 	json.NewEncoder(w).Encode(response)
// }
