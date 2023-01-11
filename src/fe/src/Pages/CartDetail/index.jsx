import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import product_1 from "../../components/Images/product-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getCartRedux, getUserQuery, updateCart } from "../../app/slice/userSlice";

import { getProductById } from "../../Services/product";
import { getCart } from "../../Services/cart";

const ProductRow = ({ item }) => {
	const data = item.items[0];
	return (
		<>
			<div className="col-span-3 flex gap-4 items-center">
				<div className="">
					<img className="w-24 aspect-square" src={data.image} alt={"cannot load image"} />
				</div>
				<div className="">
					<div className="font-bold text-sm">{data.name}</div>
					<div className="text-red-500 text-xs">Gaomon</div>
					<div
						className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
						onClick={() => {
							updater("delete", item.id);
						}}>
						Xóa
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center">{data.quantity}</div>
			<span className="flex items-center font-semibold text-sm">{data.price}</span>
			<span className="flex items-center font-semibold text-sm">{data.price * data.quantity}</span>
		</>
	);
};

const Order = () => {
	const [data, setData] = useState({ sellers: [] });
	const dispatch = useDispatch();
	useEffect(() => {
		getCart()
			.then((res) => {
				console.log(res);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	// const updater = (type, id) => {
	// 	if (type === "increment") {
	// 		setCart((prev) =>
	// 			prev.map((item) => {
	// 				if (item.id !== id) return item;
	// 				return { id: item.id, amount: item.amount + 1 };
	// 			})
	// 		);
	// 	} else if (type === "decrement") {
	// 		setCart((prev) =>
	// 			prev.map((item) => {
	// 				if (item.id !== id) return item;
	// 				return { id: item.id, amount: item.amount - 1 < 0 ? 0 : item.amount - 1 };
	// 			})
	// 		);
	// 	} else if (type === "delete") {
	// 		setCart((prev) => prev.filter((item) => item.id !== id));
	// 	}
	// };

	const navigate = useNavigate();

	return (
		<div>
			<div className="container mx-auto mt-10">
				<div className="grid grid-cols-[3fr_1fr] gap-5">
					<div className="bg-white p-10">
						<div className="flex justify-between">
							<h1 className="font-semibold text-2xl">Giỏ hàng</h1>
							<h2 className="font-semibold text-2xl">
								<span className="text-xl text-slate-500">Tổng cộng: </span>3
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
								<span className="font-semibold">3</span>
							</div>
							<div className="">
								<div className="flex justify-between items-center">
									<span className="font-semibold text-slate-500">Tổng tiền</span>
									<span className="font-semibold">1 800 000 vnđ</span>
								</div>
							</div>

							<button
								className="bg-indigo-500 font-semibold hover:bg-indigo-800 hover:scale-105 duration-300 py-3 text-white rounded-md"
								onClick={() => {
									dispatch(updateCart(cart));
									navigate("/payment");
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
