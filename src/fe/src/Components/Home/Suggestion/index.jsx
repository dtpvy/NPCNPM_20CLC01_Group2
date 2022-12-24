import React from "react";
import ProductBox from "./ProductBox";

const suggestions = [
	{ name: "Quần áo 1", price: "200.0" },
	{ name: "Điện thoại 1", price: "2000.0" },
	{ name: "Thiết bị điện tử 1", price: "200.0" },
	{ name: "iphone 1", price: "200.0" },
	{ name: "mũ 1", price: "200.0" },
	{ name: "Sách 1", price: "200.0" },
	{ name: "áo 1", price: "200.0" },
	{ name: "Thiết bị điện tử 1", price: "200.0" },
	{ name: "iphone 1", price: "200.0" },
	{ name: "mũ 1", price: "200.0" },
	{ name: "Sách 1", price: "200.0" },
	{ name: "áo 1", price: "200.0" },
];

export default function Suggestion(props) {
	const Suggestions = suggestions.map((thing, index) => {
		return <ProductBox key={index} product={thing.name} price={thing.price} />;
	});

	return (
		<div className="">
			<h3 className="text-3xl font-semibold mb-3">Gợi ý hôm nay</h3>
			<div className="grid grid-cols-5 gap-5 bg-white">{Suggestions}</div>
		</div>
	);
}
