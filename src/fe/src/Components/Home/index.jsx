import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCollections } from "../../app/slice/collectionsSlice";
import { getProducts } from "../../app/slice/productsSlice";

import Category from "./Category";
import Suggestion from "./Suggestion";

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCollections());
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div className="flex flex-col gap-14">
			<Category />
			<Suggestion />
		</div>
	);
}
