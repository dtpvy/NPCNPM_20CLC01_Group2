import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cleanCart, getCart } from "../../Services/cart";
import { createOrder } from "../../Services/order";
import { getUserInfo } from "../../Services/account";

const Payment = () => {
	const [data, setData] = useState([]);
	const [user, setUser] = useState({});
	const [total, setTotal] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		getCart()
			.then((res) => {
				console.log(res);
				const products = [];
				res.data.sellers.map((i) => {
					i.items.map((item) => {
						products.push(item);
						setTotal((prev) => prev + item.quantity * item.price);
					});
				});
				setData(products);
			})
			.catch((err) => console.log(err));
		getUserInfo()
			.then((res) => {
				setUser(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="w-full">
			<div className="w-full p-4 border-4 border-sky-600 rounded-sm">
				<div>
					<div className="w-full grid grid-cols-[4fr_2fr_1fr_1fr_2fr] gap-y-5 gap-x-5">
						<h1 className="text-4xl font-semibold col-start-1 col-span-2">Sản phẩm</h1>
						<div className="text-slate-400">Đơn giá</div>
						<div className="text-slate-400">Số lượng</div>
						<div className="flex justify-end mb-14 text-slate-400">Thành tiền</div>
					</div>
					<div className="flex flex-col gap-2">
						{data.map((item, index) => {
							return (
								<div
									key={index}
									className="w-full grid grid-cols-[4fr_2fr_1fr_1fr_2fr] gap-y-5 gap-x-5">
									<div className="flex gap-2 items-center">
										<div className="h-12 aspect-square bg-red-300 rounded-md  cursor-pointer">
											<img src={item.image} alt="cannot load" />
										</div>
										<span>{item.name}</span>
									</div>
									<div className="text-slate-500"></div>
									<div>{`${item.price}`}</div>
									<div>{item.quantity}</div>
									<div className="flex justify-end">{item.price * item.quantity}</div>
								</div>
							);
						})}
					</div>

					<div className="w-full h-1 bg-blue-400 my-4 rounded-lg col-span-5"></div>
					<div className="col-start-5 col-span-1 flex justify-between">
						<div className="text-slate-500 col-span-4">Tổng cộng:</div>
						<div className="font-semibold flex justify-end">{total}</div>
					</div>

					<div className="col-span-5 flex justify-end">
						<div className="w-1/5 h-1 bg-slate-200 mt-4 mb-2 rounded-lg"></div>
					</div>
					<div className="col-span-5 flex justify-end">
						<div
							className="px-4 py-2 bg-sky-600 text-white rounded-md cursor-pointer hover:scale-110 hover:bg-sky-800 duration-300"
							onClick={() => {
								createOrder({ address: user.address, phone: user.phone })
									.then((res) => {
										navigate("/order");
									})
									.catch((err) => console.log(err));
							}}>
							Thanh toán
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
