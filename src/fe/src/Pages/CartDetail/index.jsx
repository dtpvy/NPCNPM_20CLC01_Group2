import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import product_1 from "../../components/Images/product-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ProductRow = () => {
	const [amount, setAmount] = useState(1);

	return (
		<>
			<div className="col-span-3 flex gap-4 items-center">
				<div className="">
					<img className="w-24 aspect-square" src={product_1} alt={product_1} />
				</div>
				<div className="">
					<div className="font-bold text-sm">Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch</div>
					<div className="text-red-500 text-xs">Gaomon</div>
					<div className="font-semibold hover:text-red-500 text-gray-500 text-xs">Xóa</div>
				</div>
			</div>

			<div className="flex items-center justify-center">
				<div
					className="border-2 border-slate-500 px-2 cursor-pointer bg-blue-200 hover:bg-blue-300 rounded-l-md select-none"
					type="button"
					onClick={() => {
						setAmount((x) => (x - 1 < 0 ? 0 : x - 1));
					}}>
					-
				</div>
				<span className="text-center border-solid border-2 border-gray-800 border-x-0">
					<input
						className="w-10 text-center"
						type="text"
						name="qty-input"
						value={amount}
						onChange={(e) => {
							if (e.target.value === "") {
								setAmount(0);
								return;
							}
							if (isNaN(e.target.value)) {
								return;
							}
							setAmount(e.target.value);
						}}
					/>
				</span>
				<button
					className="border-2 border-slate-500 bg-blue-200 px-2 cursor-pointer hover:bg-blue-300 rounded-r-md select-none"
					type="button"
					onClick={() => {
						setAmount((x) => x + 1);
					}}>
					+
				</button>
			</div>
			<span className="flex items-center font-semibold text-sm">600 000 vnđ</span>
			<span className="flex items-center font-semibold text-sm">600 000 vnđ</span>
		</>
	);
};

const Order = () => {
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

							<ProductRow />
							<ProductRow />
							<ProductRow />
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
