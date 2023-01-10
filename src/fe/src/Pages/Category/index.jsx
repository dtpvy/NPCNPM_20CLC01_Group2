import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductBox from "../../Components/Home/Suggestion/ProductBox";
import { getProductSearch } from "../../Services/product";

export default function Category() {
	const { id } = useParams();
	const [searchProducts, setSearchProducts] = useState([]);

	useEffect(() => {
		getProductSearch(id).then((res) => {
			console.log(res);
			setSearchProducts(res.data);
		});
	}, []);

	console.log(searchProducts);
	const searchResults = searchProducts.map((thing, index) => {
		return <ProductBox key={index} id={thing.id} title={thing.name} price={thing.price} />;
	});
	return (
		<div className="flex flex-col gap-14">
			<h3 className="text-3xl font-semibold mx-3">Danh mục sản phẩm </h3>
			<div className="p-5 grid grid-cols-5 gap-5 bg-white">{searchResults}</div>
		</div>
	);
}
