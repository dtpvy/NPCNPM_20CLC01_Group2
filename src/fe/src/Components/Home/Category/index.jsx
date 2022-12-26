import React from "react";
import { useSelector } from "react-redux";
import { getAllCollectionsQuery } from "../../../app/slice/collectionsSlice";

import CategoryBox from "./CategoryBox";

export default function Category(props) {
	const categories = useSelector(getAllCollectionsQuery);

	const Categories = categories.map((thing, index) => {
		return <CategoryBox key={index} product={thing.name} />;
	});
	return (
		<div className="">
			<h3 className="text-3xl font-semibold mb-3">Danh mục nổi bật</h3>
			<div className="grid grid-cols-8 py-4 gap-3">{Categories}</div>
		</div>
	);
}
