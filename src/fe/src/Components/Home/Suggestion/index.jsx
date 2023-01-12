import React, { useState, useEffect } from "react";

import { getProductSearch } from "../../../Services/product";
import ProductBox from "./ProductBox";

export default function Suggestion() {
	const [suggestions, setSuggestion] = useState([]);
	useEffect(() => {
		getProductSearch("e8e05e61-9244-4057-b5c9-6c9834364979").then((res) => {
			setSuggestion(res.data.splice(0, 8));
		});
	}, []);

	// useEffect(() => {
	// 	getCategory()
	// 		.then((res) => {
	// 			res.data.map((item) => {
	// 				getProductSearch(item.id).then((r) => {
	// 					setSuggestion((prev) => [...prev, ...r.data.splice(0, 8)]);
	// 				});
	// 			});
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	const Suggestions = suggestions.map((thing, index) => {
		return (
			<ProductBox
				key={index}
				id={thing.id}
				title={thing.name}
				price={thing.price}
				image={thing.image}
			/>
		);
	});

	return (
		<div className="">
			<h3 className="text-3xl font-semibold mb-3">Gợi ý hôm nay</h3>
			<div className="p-5 grid grid-cols-5 gap-5 bg-white">{Suggestions}</div>
		</div>
	);
}
