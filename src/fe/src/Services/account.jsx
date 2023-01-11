import request from "./request";

export function login({ email, password }) {
	return new Promise((resolve, reject) => {
		request({
			path: "auth/login",
			method: "post",
			data: { email, password },
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
}

export const register = (data) => {
	return new Promise((resolve, reject) => {
		request({
			path: "auth/register",
			method: "post",
			data,
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const getUserInfo = () => {
	return new Promise((resolve, reject) => {
		request({
			path: "user_info",
			method: "get",
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const updateUserInfo = (data) => {
	return new Promise((resolve, reject) => {
		request({
			method: "put",
			path: "user_info/update",
			data,
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};
