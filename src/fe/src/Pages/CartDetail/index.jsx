import React, { useState } from "react";

// import TrashIMG from "../../components/Images/trash.svg";
// import houseIMG from "../../components/Images/houseIMG.png";
import product_1 from "../../components/Images/product-1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
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

			<div className="flex items-center">
				<div
					className="border-2 border-slate-500 px-2 cursor-pointer pointer-events-none"
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
								console.log(e.target.value);
								return;
							}
							setAmount(e.target.value);
						}}
					/>
				</span>
				<button
					className="border-2 border-slate-500 px-2 cursor-pointer"
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
	return (
		<div>
			<div className="container mx-auto mt-10">
				<div className="grid grid-cols-[3fr_1fr]">
					<div className="bg-white p-10">
						<div className="flex justify-between">
							<h1 className="font-semibold text-2xl">Giỏ hàng</h1>
							<h2 className="font-semibold text-2xl">
								<span className="text-xl text-slate-500">Tổng cộng: </span>3
							</h2>
						</div>
						<div className="grid grid-cols-6 gap-y-5 gap-x-2 mt-8">
							<div className="col-span-6 w-full h-0.5 bg-slate-300"></div>
							<h3 className="col-span-3 font-semibold text-slate-500 text-xs uppercase">
								Tên sản phẩm
							</h3>
							<h3 className="font-semibold text-slate-500 text-xs uppercase">Số lượng</h3>
							<h3 className="font-semibold text-slate-500 text-xs uppercase">Đơn giá</h3>
							<h3 className="font-semibold text-slate-500 text-xs uppercase">Thành tiền</h3>

							<ProductRow />
							<ProductRow />
							<ProductRow />
						</div>

						<div>
							<div className="flex font-semibold text-indigo-600 text-sm mt-10 items-center">
								<FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Tiếp tục mua hàng
							</div>
						</div>
					</div>

					<div id="summary" className="px-8 py-10">
						<h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
						<div className="flex justify-between mt-10 mb-5">
							<span className="font-semibold text-sm uppercase pr-2">Số món hàng</span>
							<span className="font-semibold text-sm uppercase">3</span>
						</div>
						<div className="border-t mt-8">
							<div className="flex font-semibold justify-between py-6 text-sm uppercase">
								<span>Tổng tiền</span>
								<span>1 800 000 vnđ</span>
							</div>
							<button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded">
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
