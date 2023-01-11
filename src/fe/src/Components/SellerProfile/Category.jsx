import React, { useState, useEffect } from "react";

export default function Category() {
	let categories = [];
	let Categories = categories.map((thing, i) => {
		return (
			<p className="font-medium" key={i}>
				{thing}
			</p>
		);
	});
	return (
		<div className="bg-white text-lg rounded-md px-7 py-5 flex flex-col">
			<p className="text-2xl font-bold">Danh mục</p>
			<div className="w-full h-0.5 bg-slate-300 mt-3 mb-1"></div>
			<div className="flex gap-2 pl-6">
				<div className="w-0.5 h-full bg-slate-300"></div>
				<div className="flex flex-col">{Categories}</div>
			</div>
		</div>
	);
}
