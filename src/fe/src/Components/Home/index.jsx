import React from "react";

import Category from "./Category";
import Suggestion from "./Suggestion";

export default function Home() {
	return (
		<div className="flex flex-col gap-14">
			<Category />
			<Suggestion />
		</div>
	);
}
