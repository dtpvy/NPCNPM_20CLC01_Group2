import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import product_1 from "../../components/Images/product-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { getCart, removeProductCart } from "../../Services/cart";

const ProductRow = ({ item }) => {
	const [visible, setVisible] = useState(true);
	const data = item.items[0];
	return (
		visible && (
			<>
				<div className="col-span-3 flex gap-4 items-center">
					<div className="">
						<img className="w-24 aspect-square" src={data.image} alt={"cannot load image"} />
					</div>
					<div className="">
						<div className="font-bold text-sm">{data.name}</div>
						<div
							className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
							onClick={() => {
								removeProductCart(data.id)
									.then((res) => {
										setVisible(false);
									})
									.catch((err) => console.log(err));
							}}>
							Xóa
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center">{data.quantity}</div>
				<span className="flex items-center font-semibold text-sm">{data.price}</span>
				<span className="flex items-center font-semibold text-sm">
					{data.price * data.quantity}
				</span>
			</>
		)
	);
};

const Order = () => {
	const [data, setData] = useState({ sellers: [] });
	useEffect(() => {
		getCart()
			.then((res) => {
				console.log(res);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const navigate = useNavigate();

	return (
		<div>
			<div className="container mx-auto mt-10">
				<div className="grid grid-cols-[3fr_1fr] gap-5">
					<div className="bg-white p-10">
						<div className="flex justify-between">
							<h1 className="font-semibold text-2xl">Giỏ hàng</h1>
							<h2 className="font-semibold text-2xl">
								<span className="text-xl text-slate-500">Tổng cộng: </span>
								{data.sellers.length}
							</h2>
						</div>
						<div className="grid grid-cols-6 gap-y-5 gap-x-2 mt-8">
							<div className="col-span-6 w-full h-0.5 bg-slate-200"></div>
							<h3 className="col-span-3 font-semibold text-slate-500 text-xs uppercase">
								Tên sản phẩm
							</h3>
							<h3 className="font-semibold text-slate-500 text-xs uppercase text-center">
								Số lượng
							</h3>
							<h3 className="font-semibold text-slate-500 text-xs uppercase">Đơn giá</h3>
							<h3 className="font-semibold text-slate-500 text-xs uppercase">Thành tiền</h3>

							{data.sellers.map((item, i) => {
								return <ProductRow key={i} item={item} />;
							})}
						</div>

						<div>
							<div className="flex font-semibold text-indigo-600 text-sm mt-10 items-center hover:font-bold">
								<FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Tiếp tục mua hàng
							</div>
						</div>
					</div>

					<div id="summary" className="p-10 bg-white">
						<h1 className="font-semibold text-2xl">Order Summary</h1>
						<div className="grid grid-cols-1 gap-y-5 mt-8">
							<div className="w-full h-0.5 bg-slate-200"></div>
							<div className="flex justify-between items-center">
								<span className="font-semibold text-slate-500">Số món hàng:</span>
								<span className="font-semibold">{data.sellers.length}</span>
							</div>
							<div className="">
								<div className="flex justify-between items-center">
									<span className="font-semibold text-slate-500">Tổng tiền</span>
									<span className="font-semibold">
										{data.sellers.reduce((total, item) => {
											return total + item.items[0].price * item.items[0].quantity;
										}, 0)}
									</span>
								</div>
							</div>

							<button
								className="bg-indigo-500 font-semibold hover:bg-indigo-800 hover:scale-105 duration-300 py-3 text-white rounded-md"
								onClick={() => {
									if (data.sellers.length !== 0) {
										navigate("/payment");
									} else {
										alert("Giỏ hàng trống");
									}
								}}>
								Mua hàng
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
