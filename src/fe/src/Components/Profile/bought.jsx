import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserQuery } from "../../app/slice/userSlice";
import { getProductById } from "../../Services/product";

import Template from "./Template";

const options = ["Tất cả", "Chờ xác nhận", "Đang giao", "Đã giao"];

export default function Bought() {
	const user = useSelector(getUserQuery);

	let orders = [];
	user.order.map((item) => {
		item.package.map((x) => {
			orders.push(x);
		});
	});

	const [option, setOption] = useState("Tất cả");

	return (
		<Template>
			<div className="pl-5 w-full col-span-2">
				<div className="flex text-xl col-span-2 justify-start items-start flex-nowrap h-10">
					{options.map((x) => {
						return (
							<button
								key={x}
								style={{ backgroundColor: option === x ? "white" : "" }}
								className="px-2 h-full hover:bg-slate-300"
								onClick={() => {
									setOption(x);
								}}>
								<span
									style={{
										borderBottom: option === x ? "3px solid blue" : "",
										transition: "border-width 100ms linear, background-color 100ms linear",
									}}>
									{x}
								</span>
							</button>
						);
					})}
				</div>
				<div className="w-full bg-white py-5 px-10 flex flex-col justify-center gap-3 divide-y text-2xl font-bold">
					{option === "Tất cả" && Summary(orders)}
					{option === "Chờ xác nhận" && Resolving(orders)}
					{option === "Đang giao" && Shipping(orders)}
					{option === "Đã giao" && History(orders)}
				</div>
			</div>
		</Template>
	);
}

const Summary = (data) => {
	if (data.length === 0) {
		return <div>Hiện tại bạn chưa có đơn hàng nào, hãy tiếp tục mua sắm nhé!</div>;
	}
	return (
		<div className="grid grid-cols-2 gap-y-4 divide-y text-md">
			<div>Đang chờ xác nhận</div>
			<div>
				<span className="text-slate-500">Số đơn:</span>{" "}
				{data.filter((item) => item.status === "resolving").length}
			</div>
			<div>Đang giao</div>
			<div>
				<span className="text-slate-500">Số đơn:</span>{" "}
				{data.filter((item) => item.status === "shipping").length}
			</div>
			<div>Đã giao</div>
			<div>
				<span className="text-slate-500">Số đơn:</span>{" "}
				{data.filter((item) => item.status === "finished").length}
			</div>
		</div>
	);
};

const Resolving = (data) => {
	data = data.filter((item) => item.status === "resolving");
	if (data.length === 0) {
		return <div>Hiện tại bạn chưa có đơn hàng nào, hãy tiếp tục mua sắm nhé!</div>;
	}
	return data.map((item, index) => {
		const product = getProductById(item.id);
		return (
			<div key={index} className="py-2 grid grid-cols-[1fr_1fr_1fr] items-center text-md">
				<div>{product.name}</div>
				<div>
					<span className="text-slate-500 text-sm">Số lượng:</span> {item.amount}
				</div>
				<div className="flex items-center gap-3">
					<span className="text-slate-500 text-sm">Tổng cộng:</span> {product.price * item.amount}
				</div>
			</div>
		);
	});
};

const Shipping = (data) => {
	data = data.filter((item) => item.status === "shipping");
	if (data.length === 0) {
		return <div>Hiện tại bạn chưa có đơn hàng nào, hãy tiếp tục mua sắm nhé!</div>;
	}
	return data.map((item, index) => {
		const product = getProductById(item.id);
		return (
			<div key={index} className="py-2 grid grid-cols-[1fr_1fr_1fr] items-center text-md">
				<div>{product.name}</div>
				<div>
					<span className="text-slate-500 text-sm">Số lượng:</span> {item.amount}
				</div>
				<div className="flex items-center gap-3">
					<span className="text-slate-500 text-sm">Tổng cộng:</span> {product.price * item.amount}
				</div>
			</div>
		);
	});
};

const History = (data) => {
	data = data.filter((item) => item.status === "finished");
	if (data.length === 0) {
		return <div>Hiện tại bạn chưa có đơn hàng nào, hãy tiếp tục mua sắm nhé!</div>;
	}
	return data.map((item, index) => {
		const product = getProductById(item.id);
		return (
			<div key={index} className="py-2 grid grid-cols-[1fr_1fr_1fr] items-center text-md">
				<div>{product.name}</div>
				<div>
					<span className="text-slate-500 text-sm">Số lượng:</span> {item.amount}
				</div>
				<div className="flex items-center gap-3">
					<span className="text-slate-500 text-sm">Tổng cộng:</span> {product.price * item.amount}
				</div>
			</div>
		);
	});
};
