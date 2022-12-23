import React from "react";

import SellerInfor from "./SellerInfor";
import Category from "./Category";
import Products from "./Products";
// import Suggestion from "./Suggestion/Suggestion.jsx";

export default function SellerProfile() {
	return (
		<div className="bg-slate-200">
			<SellerInfor />
			<div className="flex 	">
				<Category />
				<Products />
			</div>
		</div>
	);
}
