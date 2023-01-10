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
