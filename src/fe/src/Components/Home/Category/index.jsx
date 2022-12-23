import React from "react";
import CategoryBox from "./CategoryBox";

const categories = [
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

export default function Category(props) {
	const Categories = categories.map((thing, index) => {
		return <CategoryBox key={index} product={thing.name} />;
	});
	return (
		<div className="">
			<h3 className="text-3xl font-semibold mb-3">Danh mục nổi bật</h3>
			<div className="grid grid-cols-8 p-4 gap-3 bg-red-500">{Categories}</div>
		</div>
	);
}
