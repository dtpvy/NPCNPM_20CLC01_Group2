import React from "react";
import img from "./hat.jpg";

export default function ProductBox(props) {
	return (
		<div className="relative bg-blue-300 p-2 pb-4 flex flex-col items-start gap-2 rounded-md w-full cursor-pointer hover:scale-105 duration-300 hover:shadow-2xl">
			<img className="w-full rounded-md mb-3 border-2 border-slate-300" src={img} alt="" />

			<div className="absolute text-sm text-red-500 top-4 right-4">QC</div>
			{/* <a href="#" className="absolute bottom-6 left-3 lg:left-6">
					<i className="fa fa-heart-o"></i>
				</a> */}
			<p className="font-semibold text-2xl">{props.product}</p>
			<div className="w-full h-0.5 bg-green-300"></div>
			<div className="flex justify-between w-full items-center">
				<p className="text-xl text-white font-semibold">{props.price}vnđ </p>
				<div className="text-slate-800 font-bold">Freeship</div>
			</div>
		</div>
	);
}
