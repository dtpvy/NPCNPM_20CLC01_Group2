import React from "react";
import { useNavigate } from "react-router-dom";

import img from "./hat.jpg";

export default function CategoryBox(props) {
	const navigate = useNavigate();

	return (
		<div
			className="bg-yellow-300 p-2 flex flex-col gap-2 rounded-md cursor-pointer duration-300 	hover:scale-105"
			onClick={() => {}}>
			<img className="inline-block w-full" src={img} alt="" />
			<p className="font-semibold text-center">{props.title}</p>
		</div>
	);
}
