package controllers

import (
	"encoding/json"
	"fmt"
	db "main/database"
	md "main/models"
	"net/http"
	"strconv"
	"time"

	"github.com/google/uuid"
	"github.com/julienschmidt/httprouter"
	"gorm.io/gorm"
)

type Collection struct {
	Id        string    `json:"id"`
	Name      string    `json:"name"`
	Image     string    `json:"image"`
	SellerId  string    `json:"seller_id"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type CollectionDetail struct {
	CollectionId string `json:"collection_id"`
	ProductId    string `json:"product_id"`
}

func (u *Collection) BeforeCreate(tx *gorm.DB) (err error) {
	u.Id = uuid.New().String()
	return
}

func CreateCollection(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	w.Header().Set("Content-Type", "application/json")
	payload := make(map[string]string)
	err := json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	collection := Collection{Name: payload["name"], Image: payload["image"], SellerId: userId.(string)}
	_db.Create(&collection)
	if err != nil {
		var response = md.BuildMessageResponse("Create collection failed")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = md.BuildMessageResponse("Create collection successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func CreateProduct(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	w.Header().Set("Content-Type", "application/json")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	product := md.Product{
		Name:        payload["name"].(string),
		Image:       payload["image"].(string),
		Quantity:    int(payload["quantity"].(float64)),
		Description: payload["description"].(string),
		Price:       int(payload["price"].(float64)),
		OldPrice:    int(payload["old_price"].(float64)),
	}
	_db := db.Connect()

	err := _db.Create(&product).Error
	if err != nil {
		var response = md.BuildMessageResponse("Create product failed")
		json.NewEncoder(w).Encode(response)
	} else {
		var collection Collection
		_db.Where("seller_id = ?", userId).Order("created_at asc").First(&collection)
		fmt.Println(collection)
		collectionDetail := CollectionDetail{CollectionId: collection.Id, ProductId: product.Id}
		err := _db.Create(&collectionDetail).Error
		if err != nil {
			var response = md.BuildMessageResponse("Create product failed")
			json.NewEncoder(w).Encode(response)
		} else {
			var response = md.BuildMessageResponse("Create product successfully")
			json.NewEncoder(w).Encode(response)
		}
	}
}

func GetListCollection(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")
	sellerName := ps.ByName("seller_name")
	_db := db.Connect()
	var collections []Collection
	err := _db.Table("users").Select("*").Joins("left join collections on collections.seller_id = users.id").Where("users.seller_name = ?", sellerName).Order("collections.created_at asc").Scan(&collections).Error
	if err != nil {
		w.WriteHeader(502)
		var response = md.BuildErrorResponse("Server error", nil)
		json.NewEncoder(w).Encode(response)
	} else {
		var response = md.BuildResponse(collections)
		json.NewEncoder(w).Encode(response)
	}
}

func GetStore(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")
	sellerName := ps.ByName("seller_name")
	_db := db.Connect()
	var collections []md.Collection
	_db.Table("users").Select("*").Joins("left join collections on collections.seller_id = users.id").Where("users.seller_name = ?", sellerName).Order("collections.created_at asc").Scan(&collections)
	for i := 0; i < len(collections); i++ {
		var products []md.Product
		_db.Table("products").Select("products.*, collections.id as collection_id").Joins("left join collection_details on collection_details.product_id = products.id").Joins("left join collections on collections.id = collection_details.collection_id").Where("collections.id = ?", collections[i].Id).Order("products.created_at desc").Scan(&products)
		collections[i].Products = products
	}
	store := md.Store{Collection: collections}
	_db.Where("seller_name = ?", sellerName).First(&store.User)
	var response = md.BuildResponse(store)
	json.NewEncoder(w).Encode(response)
}

func GetProductCollection(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")
	collectionId := r.URL.Query().Get("collection_id")
	sortType := r.URL.Query().Get("st")
	sort := r.URL.Query().Get("sort")
	page, _ := strconv.ParseInt(r.URL.Query().Get("page"), 10, 64)
	limit, _ := strconv.ParseInt(r.URL.Query().Get("limit"), 10, 64)
	if limit == 0 {
		limit = 10
	}
	_db := db.Connect()
	if sortType == "" {
		sortType = "created_at"
	}
	if sort == "" {
		sort = "desc"
	}
	order := sortType + " " + sort
	var products []md.Product
	_db.Table("products").Select("products.*, collections.id as collection_id").Joins("left join collection_details on collection_details.product_id = products.id").Joins("left join collections on collections.id = collection_details.collection_id").Where("collections.id = ?", collectionId).Order(order).Offset(int(page * limit)).Limit(int(limit)).Scan(&products)
	var response = md.BuildResponse(products)
	json.NewEncoder(w).Encode(response)
}

func UpdateCollectionInformation(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	w.Header().Set("Content-Type", "application/json")
	collection := make(map[string]interface{})
	err := json.NewDecoder(r.Body).Decode(&collection)
	if err != nil {
		w.WriteHeader(400)
		var response = md.BuildErrorResponse("Update collection failed", nil)
		json.NewEncoder(w).Encode(response)
		return
	}
	_db := db.Connect()
	var _collection Collection
	_db.Where("id = ?", collection["id"]).First(&_collection)
	if _collection.SellerId == userId {
		_db.Model(Collection{}).Where("id = ?", _collection.Id).Updates(collection)
		var response = md.BuildMessageResponse("Update user information successfully")
		json.NewEncoder(w).Encode(response)
	} else {
		w.WriteHeader(401)
		var response = md.BuildErrorResponse("Update collection failed", nil)
		json.NewEncoder(w).Encode(response)
	}
}

func AddProductCollection(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	w.Header().Set("Content-Type", "application/json")
	payload := make(map[string]interface{})
	err := json.NewDecoder(r.Body).Decode(&payload)
	if err != nil {
		w.WriteHeader(400)
		var response = md.BuildErrorResponse("Update collection failed", nil)
		json.NewEncoder(w).Encode(response)
		return
	}
	_db := db.Connect()
	var _collection, collection Collection
	_db.Where("id = ?", payload["id"]).First(&_collection)
	if _collection.SellerId == userId {
		_db.Where("seller_id = ?", userId).Order("created_at asc").First(&collection)
		var collectionDetails []CollectionDetail
		products := payload["product"].([]interface{})
		for i := 0; i < len(products); i++ {
			var cd CollectionDetail
			_db.Where("product_id = ? and collection_id = ?", products[i], collection.Id).First(&cd)
			if cd.ProductId == "" {
				var response = md.BuildErrorResponse("Product is not in store", nil)
				json.NewEncoder(w).Encode(response)
				return
			} else {
				collectionDetails = append(collectionDetails, CollectionDetail{ProductId: products[i].(string), CollectionId: payload["id"].(string)})
			}
		}
		_db.Create(collectionDetails)
	} else {
		w.WriteHeader(401)
		var response = md.BuildErrorResponse("Update collection failed", nil)
		json.NewEncoder(w).Encode(response)
	}
}

func DeleteProductCollection(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	w.Header().Set("Content-Type", "application/json")
	payload := make(map[string]interface{})
	err := json.NewDecoder(r.Body).Decode(&payload)
	if err != nil {
		w.WriteHeader(400)
		var response = md.BuildErrorResponse("Update collection failed", nil)
		json.NewEncoder(w).Encode(response)
		return
	}
	_db := db.Connect()
	var _collection, collection Collection
	_db.Where("id = ?", payload["id"]).First(&_collection)
	if _collection.SellerId == userId {
		_db.Where("seller_id = ?", userId).Order("created_at asc").First(&collection)
		products := payload["product"].([]interface{})
		for i := 0; i < len(products); i++ {
			var cd CollectionDetail
			_db.Where("product_id = ? and collection_id = ?", products[i], collection.Id).First(&cd)
			if cd.ProductId == "" {
				var response = md.BuildErrorResponse("Product is not in store", nil)
				json.NewEncoder(w).Encode(response)
				return
			}
		}
		_db.Where("collection_id = ?", payload["id"]).Delete(CollectionDetail{}, "product_id in ?", products)
	} else {
		w.WriteHeader(401)
		var response = md.BuildErrorResponse("Update collection failed", nil)
		json.NewEncoder(w).Encode(response)
	}
}

func DeleteCollection(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	w.Header().Set("Content-Type", "application/json")
	payload := make(map[string]interface{})
	err := json.NewDecoder(r.Body).Decode(&payload)
	if err != nil {
		w.WriteHeader(400)
		var response = md.BuildErrorResponse("Update collection failed", nil)
		json.NewEncoder(w).Encode(response)
		return
	}
	_db := db.Connect()
	var _collection Collection
	_db.Where("id = ?", payload["id"]).First(&_collection)
	if _collection.SellerId == userId {
		_db.Where("collection_id = ?", payload["id"]).Delete(CollectionDetail{})
		_db.Where("id = ?", payload["id"]).Delete(Collection{})
	} else {
		w.WriteHeader(401)
		var response = md.BuildErrorResponse("Update collection failed", nil)
		json.NewEncoder(w).Encode(response)
	}
}
