import axios from "axios";
import queryString from "query-string";
import { BASE_URL } from "../Constants/constant";

export default function request({ path, baseUrl, params, data, headers, method }) {
	const token = localStorage.getItem("access-token");
	console.log({ token });
	return new Promise((resolve, reject) => {
		axios
			.request({
				url: path,
				baseURL: baseUrl || BASE_URL.dev,
				params,
				method,
				data,
				headers: {
					"Content-Type": "application/json",
					...(token && { "access-token": token }),
					...headers,
				},
			})
			.then((res) => {
				resolve(res.data);
			})
			.catch((res) => {
				reject(res.response ? res.response.data : res);
			});
	});
}
