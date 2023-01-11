import request from "./request";

export const getOrderSeller = () => {
	return new Promise((resolve, reject) => {
		request({
			method: "get",
			path: "seller/orders",
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const getOrderUser = () => {
	return new Promise((resolve, reject) => {
		request({
			method: "get",
			path: "user/orders",
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const updateStatusOrder = (order_id, status, is_seller) => {
	return new Promise((resolve, reject) => {
		request({
			method: "put",
			path: `order/update/${order_id}`,
			data: {
				status,
				is_seller,
			},
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const createOrder = ({address, phone}) => {
	return new Promise((resolve, reject) => {
		request({
			method: "post",
			path: `order/create`,
			data: {
				address,
				phone,
			},
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
}