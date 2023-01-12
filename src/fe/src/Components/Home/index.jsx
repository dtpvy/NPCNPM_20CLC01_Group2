import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { refreshToken } from "../../Services/account";

import Category from "./Category";
import Suggestion from "./Suggestion";

export default function Home() {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("access-token");
		if (token) {
			refreshToken()
				.then((res) => {})
				.catch((err) => console.log(err));
		} else {
			navigate("/login");
		}
	}, []);

	return (
		<div className="flex flex-col gap-14">
			<Category />
			<Suggestion />
		</div>
	);
}
