import request from "./request";

const testData = [
	{ id: 1, title: "Hủ tíu" },
	{ id: 2, title: "Bún riu" },
];

export const getCategory = () => {
	return new Promise((resolve, reject) => {
		request({
			baseUrl: "https://279b-171-253-20-35.ap.ngrok.io",
			path: "category/list",
			method: "get",
		})
			.then((res) => resolve(res))
			.catch(() => resolve(testData));
	});
};
