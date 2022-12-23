import React from "react";
import img from "./hat.jpg";

export default function CategoryBox(props) {
	return (
		<div className="bg-yellow-300 p-2 flex flex-col gap-2 rounded-md cursor-pointer duration-300 hover:scale-105">
			<img className="inline-block w-full" src={img} alt="" />
			<p className="font-semibold text-center">{props.product}</p>
		</div>
	);
}
