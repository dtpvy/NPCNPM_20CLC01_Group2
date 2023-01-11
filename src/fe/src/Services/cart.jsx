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
