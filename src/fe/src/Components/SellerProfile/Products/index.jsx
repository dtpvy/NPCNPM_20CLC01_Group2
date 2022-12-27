import React from "react";
import ProductBox from "../../Home/Suggestion/ProductBox";

export default function Products() {
	const products = [
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
	const Products = products.map((thing, index) => {
		return <ProductBox key={index} product={thing.name} price={thing.price} />;
	});

	return (
		<div className="">
			<div className="flex items-center justify-between mb-5">
				<div className="flex gap-2">
					<div className="text-lg">Sắp xếp theo:</div>
					<div className="bg-white w-20 cursor-pointer flex items-center justify-center rounded-md hover:bg-slate-300">
						Mới nhất
					</div>
					<div className="bg-white w-20 cursor-pointer flex items-center justify-center rounded-md hover:bg-slate-300">
						Giá
					</div>
					<div className="bg-white w-20 cursor-pointer flex items-center justify-center rounded-md hover:bg-slate-300">
						Phổ Biến
					</div>
				</div>
				<div className="flex items-center">
					<div className="h-8 flex items-center">
						<span>1</span>
						<span>/2</span>
					</div>
					<div className="h-8 flex items-center">
						<i className="fa fa-toggle-left	text-xl mx-1 pl-3"></i>
					</div>
					<div className="h-8 flex items-center">
						<i className="fa fa-toggle-right text-xl mx-1"></i>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-5 gap-3">{Products}</div>
		</div>
	);
}
