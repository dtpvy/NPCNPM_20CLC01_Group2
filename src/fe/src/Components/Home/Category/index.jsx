import React, { useState, useEffect } from "react";
import { getCategory } from "../../../Services/category";

import CategoryBox from "./CategoryBox";

export default function Category() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategory().then((res) => {
			setCategories(res);
		});
	}, []);

	const Categories = categories.map((item) => {
		return <CategoryBox key={item.id} title={item.title} />;
	});

	return (
		<div className="">
			<h3 className="text-3xl font-semibold mb-3">Danh mục nổi bật</h3>
			<div className="grid grid-cols-8 py-4 gap-3">{Categories}</div>
		</div>
	);
}
