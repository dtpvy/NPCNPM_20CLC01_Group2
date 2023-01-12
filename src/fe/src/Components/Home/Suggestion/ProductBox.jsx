import React from "react";
import { useNavigate } from "react-router-dom";

import img from "./hat.jpg";

export default function ProductBox(props) {
	const image = props.image ? props.image : img;

	const navigate = useNavigate();
	return (
		<div
			className="relative bg-blue-300 p-2 pb-4 flex flex-col items-start justify-between gap-2 rounded-sm w-full cursor-pointer hover:scale-105 duration-300 hover:shadow-2xl"
			onClick={() => {
				navigate(`/detail/${props.id}`);
			}}>
			<img
				className="w-full rounded-md mb-3 border-2 border-slate-300"
				src={image}
				alt="cannot load"
			/>

			<div className="absolute text-sm text-red-500 top-4 right-4">QC</div>
			{/* <a href="#" className="absolute bottom-6 left-3 lg:left-6">
					<i className="fa fa-heart-o"></i>
				</a> */}
			<div className="flex flex-col gap-2">
				<p className="font-semibold text-2xl">{props.title}</p>
				<div className="w-full h-0.5 bg-slate-300"></div>
				<div className="flex justify-between w-full items-center">
					<p className="text-xl text-white font-semibold">{props.price} vnđ </p>
					<div className="text-slate-800 font-bold">Freeship</div>
				</div>
			</div>
		</div>
	);
}