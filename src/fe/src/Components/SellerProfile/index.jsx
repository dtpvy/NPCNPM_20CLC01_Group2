import React from "react";

import SellerInfor from "./SellerInfor";
import Category from "./Category";
import Products from "./Products";

export default function SellerProfile() {
	return (
		<div className="bg-slate-200 flex flex-col gap-3">
			<SellerInfor />
			<div className="grid grid-cols-[1fr_3fr] gap-5">
				<Category />
				<Products />
			</div>
		</div>
	);
}
