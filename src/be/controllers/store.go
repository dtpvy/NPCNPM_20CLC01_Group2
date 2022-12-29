package controllers

import (
	"encoding/json"
	db "main/database"
	md "main/models"
	"main/presenters"
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

func CreateCollection(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]string)
	err := json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	collection := md.Collection{Name: payload["name"], Image: payload["image"], SellerId: userId.(string)}
	_db.Create(&collection)
	if err != nil {
		var response = presenters.BuildMessageResponse("Create collection failed")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Create collection successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func CreateProduct(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	product := presenters.Product{
		Name:        payload["name"].(string),
		Image:       payload["image"].(string),
		Quantity:    int(payload["quantity"].(float64)),
		Description: payload["description"].(string),
		CategoryId:  payload["category_id"].(string),
		CreatorId:   userId.(string),
		Price:       int(payload["price"].(float64)),
		OldPrice:    int(payload["old_price"].(float64)),
	}
	_db := db.Connect()

	var collection md.Collection
	_db.Where("seller_id = ?", userId).Order("created_at asc").First(&collection)
	collection.Products = append(collection.Products, product)
	err := _db.Save(&collection).Error
	if err != nil {
		var response = presenters.BuildMessageResponse("Create product failed")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Create product successfully")
		json.NewEncoder(w).Encode(response)
	}
}

func GetListCollection(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id := ps.ByName("id")
	_db := db.Connect()
	var collections []md.Collection
	err := _db.Preload("Products").Where("seller_id = ?", id).Find(&collections).Error
	if err != nil {
		w.WriteHeader(502)
		var response = presenters.BuildErrorResponse("Server error", nil)
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildResponse(collections)
		json.NewEncoder(w).Encode(response)
	}
}

func GetStore(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	id := ps.ByName("id")
	_db := db.Connect()
	var collections []presenters.Collection
	_db.Table("users").Select("*").Joins("left join collections on collections.seller_id = users.id").Where("users.id = ?", id).Order("collections.created_at asc").Scan(&collections)
	for i := 0; i < len(collections); i++ {
		var products []presenters.Product
		_db.Table("products").Preload("Category").Select("products.*").Joins("left join categories on categories.id = products.category_id").Joins("left join collection_details on collection_details.product_id = products.id").Joins("left join collections on collections.id = collection_details.collection_id").Where("collections.id = ?", collections[i].Id).Order("products.created_at desc").Scan(&products)
		collections[i].Products = products
	}
	store := presenters.Store{Collection: collections}
	_db.Where("id = ?", id).First(&store.User)
	var response = presenters.BuildResponse(store)
	json.NewEncoder(w).Encode(response)
}

func GetProductCollection(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
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
	var products []presenters.Product
	_db.Table("products").Select("products.*, collections.id as collection_id").Joins("left join collection_details on collection_details.product_id = products.id").Joins("left join collections on collections.id = collection_details.collection_id").Where("collections.id = ?", collectionId).Order(order).Offset(int(page * limit)).Limit(int(limit)).Scan(&products)
	var response = presenters.BuildResponse(products)
	json.NewEncoder(w).Encode(response)
}

func UpdateCollectionInformation(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	collection := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&collection)
	_db := db.Connect()
	var _collection md.Collection
	_db.Where("id = ?", collection["id"]).First(&_collection)
	if _collection.SellerId == userId {
		_db.Model(md.Collection{}).Where("id = ?", _collection.Id).Updates(collection)
		var response = presenters.BuildMessageResponse("Update collection successfully")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Update collection failed. Account is invalid")
		json.NewEncoder(w).Encode(response)
	}
}

func UpdateProduct(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	product := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&product)
	_db := db.Connect()
	var _product md.Product
	_db.Where("id = ?", product["id"]).First(&_product)
	if _product.CreatorId == userId {
		_db.Model(md.Product{}).Where("id = ?", _product.Id).Updates(product)
		var response = presenters.BuildMessageResponse("Update product successfully")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Update product failed. Account is invalid")
		json.NewEncoder(w).Encode(response)
	}
}

func AddProductCollection(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	var collection, _collection md.Collection
	_db.Where("id = ?", payload["id"]).First(&collection)
	if collection.SellerId == userId {
		_db.Preload("Products").Where("seller_id = ?", userId).Order("created_at asc").First(&_collection)
		products := payload["product"].([]interface{})
		for i := 0; i < len(products); i++ {
			var product presenters.Product
			for j, p := range _collection.Products {
				if p.Id == products[i] {
					product = _collection.Products[j]
					break
				}
			}
			if product.Id == "" {
				var response = presenters.BuildErrorResponse("Product is not in store", nil)
				json.NewEncoder(w).Encode(response)
				return
			} else {
				_db.Exec("INSERT INTO collection_details VALUES (?, ?)", collection.Id, product.Id)
			}
		}

		var response = presenters.BuildMessageResponse("Add product into collection successfully")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Update collection failed. Account is invalid")
		json.NewEncoder(w).Encode(response)
	}
}

func DeleteProductCollection(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	var _collection, collection md.Collection
	_db.Where("id = ?", payload["id"]).First(&_collection)
	if _collection.SellerId == userId {
		_db.Preload("Products").Where("seller_id = ?", userId).Order("created_at asc").First(&collection)
		products := payload["product"].([]interface{})
		for i := 0; i < len(products); i++ {
			var product presenters.Product
			for j, p := range collection.Products {
				if p.Id == products[i] {
					product = collection.Products[j]
					break
				}
			}
			if product.Id == "" {
				var response = presenters.BuildErrorResponse("Product is not in store", nil)
				json.NewEncoder(w).Encode(response)
				return
			} else {
				_collection.Products = append(_collection.Products, product)
			}
		}
		_db.Model(&_collection).Association("Products").Delete(_collection.Products)
		var response = presenters.BuildMessageResponse("Delete product in collection successfully")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildMessageResponse("Update collection failed. Account is invalid")
		json.NewEncoder(w).Encode(response)
	}
}

func DeleteCollection(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	userId := r.Context().Value("user_id")
	payload := make(map[string]interface{})
	json.NewDecoder(r.Body).Decode(&payload)
	_db := db.Connect()
	var collection md.Collection
	_db.Where("id = ?", payload["id"]).First(&collection)
	if collection.SellerId == userId {
		_db.Model(&collection).Association("Products").Clear()
		_db.Delete(&collection)
		var response = presenters.BuildMessageResponse("Delete collection successfully")
		json.NewEncoder(w).Encode(response)
	} else {
		var response = presenters.BuildErrorResponse("Update collection failed. Account is invalid", nil)
		json.NewEncoder(w).Encode(response)
	}
}
