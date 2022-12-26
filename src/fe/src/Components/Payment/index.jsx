import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ background, toggler }) => {
	return (
		<div
			className="w-[calc(60vw)] h-[calc(75vh)] cursor-pointer relative m-auto hover:scale-110 duration-500"
			onClick={() => {
				toggler(false);
			}}>
			<div className="absolute top-2 right-5">X</div>
			<div className={`w-full h-full ${background} rounded-md`}></div>
		</div>
	);
};

const Payment = () => {
	const navigate = useNavigate();

	const [showModal, setShowModal] = useState(false);
	const [modalIndex, setModalIndex] = useState(0);
	const modals = [
		<Modal background="bg-red-300" toggler={setShowModal} />,
		<Modal background="bg-green-300" toggler={setShowModal} />,
	];

	return (
		<div className="w-full">
			{showModal === true ? (
				modals[modalIndex]
			) : (
				<div className="w-full p-4 border-4 border-sky-600 rounded-sm">
					<div className="w-full grid grid-cols-[4fr_2fr_1fr_1fr_2fr] gap-y-5 gap-x-5">
						<h1 className="text-4xl font-semibold col-start-1 col-span-2">Sản phẩm</h1>
						<div className="text-slate-400">Đơn giá</div>
						<div className="text-slate-400">Số lượng</div>
						<div className="flex justify-end mb-14 text-slate-400">Thành tiền</div>

						<div className="flex gap-2 items-center">
							<div
								className="h-12 aspect-square bg-red-300 rounded-md hover:scale-110 duration-300 cursor-pointer"
								onClick={() => {
									setShowModal(true);
									setModalIndex(0);
								}}></div>
							<span>Quẩn Jean Khá Bảnh</span>
						</div>
						<div className="text-slate-500">Loại 1: Quẩn trơn</div>
						<div>10.000.000 đ</div>
						<div>1</div>
						<div className="flex justify-end">10.000.000 đ</div>

						<div className="flex gap-2 items-center">
							<div
								className="h-12 aspect-square bg-green-300 rounded-md hover:scale-110 duration-300 cursor-pointer"
								onClick={() => {
									setShowModal(true);
									setModalIndex(1);
								}}></div>
							<span>Nút kim cương của NTN</span>
						</div>
						<div className="text-slate-500">Loại 1: Kim cương</div>
						<div>5.000 đ</div>
						<div>2</div>
						<div className="flex justify-end">10.000 đ</div>

						<div className="w-full h-1 bg-blue-400 my-4 rounded-lg col-span-5"></div>
						<div className="col-start-5 col-span-1 flex justify-between">
							<div className="text-slate-500 col-span-4">Tổng cộng:</div>
							<div className="font-semibold flex justify-end">10.010.000 đ</div>
						</div>

						<div className="col-span-5 flex justify-end">
							<div className="w-1/5 h-1 bg-slate-200 mt-4 mb-2 rounded-lg"></div>
						</div>
						<div className="col-span-5 flex justify-end">
							<div
								className="px-4 py-2 bg-sky-600 text-white rounded-md cursor-pointer hover:scale-110 hover:bg-sky-800 duration-300"
								onClick={() => {
									navigate("/order");
								}}>
								Thanh toán
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Payment;
