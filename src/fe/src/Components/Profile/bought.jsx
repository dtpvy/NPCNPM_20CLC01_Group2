import React, { useState, useEffect } from "react";
import { getOrderUser, updateStatusOrder } from "../../Services/order";
import { getProductById } from "../../Services/product";

import Template from "./Template";

const options = ["Tất cả", "Chờ xác nhận", "Đang giao", "Đã giao"];

export default function Bought() {
	const [data, setData] = useState([]);
	const [option, setOption] = useState("Tất cả");

	useEffect(() => {
		getOrderUser()
			.then((res) => {
				console.log(res);
				const orders = [];
				res.data.map((item) => {
					item.packages.map((o) => {
						const status = o.status;
						o.items.map((i) => orders.push({ ...i, status }));
					});
				});
				setData(orders);
			})
			.catch((err) => console.log(err));
	}, []);
	console.log(data);

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
					{option === "Tất cả" && Summary(data)}
					{option === "Chờ xác nhận" && Resolving(data)}
					{option === "Đang giao" && Shipping(data)}
					{option === "Đã giao" && History(data)}
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
				{data.filter((item) => item.status === "Đang chuẩn bị").length}
			</div>
			<div>Đang giao</div>
			<div>
				<span className="text-slate-500">Số đơn:</span>{" "}
				{data.filter((item) => item.status === "Đang giao").length}
			</div>
			<div>Đã giao</div>
			<div>
				<span className="text-slate-500">Số đơn:</span>{" "}
				{data.filter((item) => item.status === "Đã giao").length}
			</div>
		</div>
	);
};

const Resolving = (data) => {
	data = data.filter((item) => item.status === "Đang chuẩn bị");
	if (data.length === 0) {
		return <div>Hiện tại bạn chưa có đơn hàng nào, hãy tiếp tục mua sắm nhé!</div>;
	}
	return data.map((item, index) => {
		return (
			<div key={item.id} className="py-2 grid grid-cols-[1fr_1fr_1fr] items-center text-md">
				<div>{item.name}</div>
				<div>
					<span className="text-slate-500 text-sm mx-auto">Số lượng:</span> {item.quantity}
				</div>
				<div className="flex items-center gap-3">
					<span className="text-slate-500 text-sm">Tổng cộng:</span> {item.price * item.quantity}
				</div>
			</div>
		);
	});
};

const Shipping = (data) => {
	data = data.filter((item) => item.status === "Đang giao");
	if (data.length === 0) {
		return <div>Hiện tại bạn chưa có đơn hàng nào, hãy tiếp tục mua sắm nhé!</div>;
	}
	return data.map((item) => {
		return <ShippingRow item={item} />;
	});
};

const ShippingRow = ({ item }) => {
	const [visible, setVisible] = useState(true);

	return (
		visible && (
			<div key={item.id} className="py-2 grid grid-cols-[2fr_1fr_1fr_1fr] items-center text-md">
				<div>{item.name}</div>
				<div>
					<span className="text-slate-500 text-sm">Số lượng:</span> {item.quantity}
				</div>
				<div className="flex items-center gap-3">
					<span className="text-slate-500 text-sm">Tổng cộng:</span> {item.price * item.quantity}
				</div>
				<div
					className="px-2 py-1 text-md font-medium text-white bg-sky-500 hover:bg-sky-700 hover:scale-105 duration-105 cursor-pointer flex justify-center items-center rounded-md duration-150"
					onClick={() => {
						updateStatusOrder(item.order_id, "Đã giao", true);
						setVisible(false);
					}}>
					Đã nhận hàng
				</div>
			</div>
		)
	);
};

const History = (data) => {
	data = data.filter((item) => item.status === "Đã giao");
	if (data.length === 0) {
		return <div>Hiện tại bạn chưa có đơn hàng nào, hãy tiếp tục mua sắm nhé!</div>;
	}
	return data.map((item, index) => {
		return (
			<div key={item.id} className="py-2 grid grid-cols-[1fr_1fr_1fr] items-center text-md">
				<div>{item.name}</div>
				<div>
					<span className="text-slate-500 text-sm">Số lượng:</span> {item.quantity}
				</div>
				<div className="flex items-center gap-3">
					<span className="text-slate-500 text-sm">Tổng cộng:</span> {item.price * item.quantity}
				</div>
			</div>
		);
	});
};
