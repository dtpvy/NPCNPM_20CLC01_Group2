import request from "./request";

export const getCart = () => {
	return new Promise((resolve, reject) => {
		request({
			path: "/cart",
			method: "get",
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const removeProductCart = (product_id) => {
	return new Promise((resolve, reject) => {
		request({
			path: "cart/remove_product",
			method: "delete",
			data: {
				product_id,
			},
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const updateProductCart = (product_id) => {
	return new Promise((resolve, reject) => {
		request({
			path: "cart/update_product",
			method: "put",
			data: {
				product_id,
				is_selected: true,
			},
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const addProductToCart = (product_id, quantity) => {
	return new Promise((resolve, reject) => {
		request({
			path: "cart/add_product",
			method: "post",
			data: {
				product_id,
				quantity,
			},
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const cleanCart = () => {
	return new Promise((resolve, reject) => {
		request({
			path: "cart/clean",
			method: "delete",
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};
