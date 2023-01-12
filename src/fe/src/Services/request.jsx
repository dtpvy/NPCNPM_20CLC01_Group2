import axios from "axios";
import { BASE_URL } from "../Constants/constant";

export default function request({
	path,
	baseUrl,
	params,
	data,
	headers,
	method,
	// requireToken = false,
}) {
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
				headers:
					token !== null
						? {
								"Content-Type": "application/json",
								"X-Access-Token": token,
								...headers,
						  }
						: {
								"Content-Type": "application/json",
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