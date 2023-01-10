import React, { useState, useEffect } from "react";
import { getCategory } from "../../../Services/category";

import CategoryBox from "./CategoryBox";

export default function Category() {
	let [categories, setCategories] = useState(<></>);

	useEffect(() => {
		getCategory().then((res) => {
			console.log(res);
			setCategories(
				res.data.map((item) => {
					return <CategoryBox key={item.id} id={item.id} title={item.title} />;
				})
			);
		});
	}, []);

	return (
		<div className="">
			<h3 className="text-3xl font-semibold mb-3">Danh mục nổi bật</h3>
			<div className="grid grid-cols-8 py-4 gap-3">{categories}</div>
		</div>
	);
}
