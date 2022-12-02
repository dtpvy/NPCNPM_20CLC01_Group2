import React, { useState } from "react";
import logo from "../../assets/logotest.svg";
import productImg from "../../assets/producttest.jpg";

const ProductDetail = () => {
	const [amount, setAmount] = useState(1);

	return (
		<div className="p-10 h-full w-full flex gap-x-3">
			<div className="bg-inherit w-2/5 rounded-md">
				<img
					src={productImg}
					alt="cannot load"
					className="w-full h-full object-contain rounded-md"
				/>
			</div>
			<div className="bg-white w-3/5 p-5 shadow-md rounded-md grid grid-cols-2 divide-x-2">
				<div className="flex flex-col justify-between h-full w-full pr-5">
					<div className="flex flex-col gap-y-5">
						<h2 className="mx-2 text-3xl font-bold">Tên sản phẩm nè</h2>
						<div className="text-white-400 mx-2">Đã bán: 51</div>
						<div className="bg-slate-100 rounded-md mx-2 px-4 py-2 w-fit">
							<span className="text-red-500 text-3xl font-bold">105.400đ</span>
						</div>
						<div className="mx-2">
							<div className="mb-3">Giao đến:</div>
							<div>Q.1, Bến nghé, Tp.HCM</div>
						</div>
						<div className="mx-2">
							<div className="mb-3">Số lượng</div>
							<div className="flex">
								<div
									className="border-2 aspect-square border-slate-400 flex justify-center items-center px-3 text-3xl hover:bg-slate-200 cursor-pointer select-none rounded-l-md"
									onClick={() => {
										setAmount((value) => (value - 1 >= 0 ? value - 1 : 0));
									}}>
									-
								</div>
								<input
									value={amount}
									className="border-2 w-16 border-x-0 border-slate-400 flex justify-center items-center text-center"
								/>
								<div
									className="border-2 border-slate-400 flex justify-center items-center px-3 text-3xl hover:bg-slate-200 cursor-pointer select-none rounded-r-md"
									onClick={() => {
										setAmount((value) => value + 1);
									}}>
									+
								</div>
							</div>
						</div>
					</div>
					<button className="mx-2 bg-red-500 px-5 py-2 rounded-md w-36 text-white hover:bg-red-400 hover:scale-110 duration-300">
						Mua ngay
					</button>
				</div>
				<div className="w-full pl-5 flex flex-col divide-y-2 gap-y-4">
					<div>
						<div className="flex items-center">
							<div className="aspect-square h-16">
								<img src={logo} alt="cannot load" className="w-full h-full object-fill" />
							</div>
							<h2 className="mx-2 text-3xl font-bold">Tên shop nè</h2>
						</div>
						<div className="py-3">
							<div className="h-8 flex gap-x-3 mb-3">
								<div className="font-bold text-lg h-full flex items-center">4.7/5</div>
								<div className="h-full flex items-center">⭐</div>
								<div className="text-md flex items-center text-slate-400">(1.2k +)</div>
							</div>
							<button className="border-blue-500 text-blue-500 border-2 w-full py-1 rounded-lg font-bold hover:bg-blue-300 hover:scale-105 duration-300">
								Xem shop
							</button>
						</div>
					</div>

					<div className="flex mt-5 pt-5">
						<div className="bg-blue-200 mx-2 my-5 p-2 select-none text-center rounded-md font-semibold">
							Hoàn tiền 100% nếu hàng giả
						</div>
						<div className="bg-blue-200 mx-2 my-5 p-2 select-none text-center rounded-md font-semibold">
							Mở hộp kiểm tra nhận hàng
						</div>
						<div className="bg-blue-200 mx-2 my-5 p-2 select-none text-center rounded-md font-semibold">
							Đổi trả trong 30 ngày nếu hàng lỗi
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
