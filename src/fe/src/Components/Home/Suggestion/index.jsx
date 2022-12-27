import React from "react";

import { getAllProduct } from "../../../Services/product";

import ProductBox from "./ProductBox";

export default function Suggestion() {
	const suggestions = getAllProduct();

	const Suggestions = suggestions.map((thing, index) => {
		return <ProductBox key={index} id={thing.id} title={thing.title} price={thing.price} />;
	});

	return (
		<div className="">
			<h3 className="text-3xl font-semibold mb-3">Gợi ý hôm nay</h3>
			<div className="p-5 grid grid-cols-5 gap-5 bg-white">{Suggestions}</div>
		</div>
	);
}
