import React, { useState } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder, getUserQuery } from "../../app/slice/userSlice";
import { getProductById } from "../../Services/product";

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
	const user = useSelector(getUserQuery);
	const dispatch = useDispatch();
	const data = useMemo(() => {
		const cart = user.cart;
		return cart.map((item) => {
			return { ...getProductById(item.id), amount: item.amount };
		});
	}, [user]);

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
											<div
												className="h-12 aspect-square bg-red-300 rounded-md hover:scale-110 duration-300 cursor-pointer"
												onClick={() => {
													setShowModal(true);
													setModalIndex(0);
												}}></div>
											<span>{item.name}</span>
										</div>
										<div className="text-slate-500"></div>
										<div>{`${item.price}`}</div>
										<div>{item.amount}</div>
										<div className="flex justify-end">{item.price * item.amount}</div>
									</div>
								);
							})}
						</div>

						<div className="w-full h-1 bg-blue-400 my-4 rounded-lg col-span-5"></div>
						<div className="col-start-5 col-span-1 flex justify-between">
							<div className="text-slate-500 col-span-4">Tổng cộng:</div>
							<div className="font-semibold flex justify-end">
								{data.reduce((total, item) => {
									return total + item.price * item.amount;
								}, 0)}
							</div>
						</div>

						<div className="col-span-5 flex justify-end">
							<div className="w-1/5 h-1 bg-slate-200 mt-4 mb-2 rounded-lg"></div>
						</div>
						<div className="col-span-5 flex justify-end">
							<div
								className="px-4 py-2 bg-sky-600 text-white rounded-md cursor-pointer hover:scale-110 hover:bg-sky-800 duration-300"
								onClick={() => {
									//
									const order = {
										package: user.cart.map((item) => {
											return { id: item.id, amount: item.amount, status: "resolving" };
										}),
									};
									dispatch(createOrder(order));
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
