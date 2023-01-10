import request from "./request";

const testData = {
	status: "DEFAULT",
	data: [
		{ id: 1, name: "Hủ tíu" },
		{ id: 2, name: "Bún riu" },
		{ id: 3, name: "Bánh canh" },
	],
};

export const getCategory = () => {
	return new Promise((resolve, reject) => {
		request({
			path: "category/list",
			method: "get",
		})
			.then((res) => resolve(res))
			.catch(() => resolve(testData));
	});
};
