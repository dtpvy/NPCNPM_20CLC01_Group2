import request from "./request";

export const createReport = (data) => {
	return new Promise((resolve, reject) => {
		request({
			method: "post",
			path: "report/create",
			data,
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};
