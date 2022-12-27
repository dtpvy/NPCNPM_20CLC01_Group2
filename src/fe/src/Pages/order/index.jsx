import React from "react";
import productImg from "../../components/Images/product-1.png";

const Order = () => {
	return (
		<div className="flex flex-col gap-4">
			{/* Information of customer */}
			<div className="grid grid-cols-3 gap-4">
				{/* Address of customer */}
				<div className="flex flex-col gap-2">
					<div className="font-semibold text-2xl">ĐỊA CHỈ NGƯỜI NHẬN</div>
					<ul className="bg-white px-5 py-2 h-32 flex flex-col justify-center items-start">
						<li>
							<span className="text-slate-400 inline-block w-32">Tên người nhận:</span>
							Vy Do
						</li>
						<li>
							<span className="text-slate-400 inline-block w-32">Địa chỉ:</span>
							227 Nguyễn Văn Cừ, quận 5
						</li>
						<li>
							<span className="text-slate-400 inline-block w-32">Số điện thoại:</span>
							0349732872
						</li>
					</ul>
				</div>
				{/* "Mode-Of-Delivery" */}
				<div className="flex flex-col gap-2">
					<div className="mx-2 font-semibold text-2xl">HÌNH THỨC GIAO HÀNG</div>
					<ul className="bg-white px-5 py-3 h-32 flex flex-col justify-center items-start">
						<li className="">Giao hàng tiết kiệm</li>
						<li>
							<span className="text-slate-400 inline-block w-28">Giao vào:</span> Thứ tư, 12/10
						</li>
						<li>
							<span className="text-slate-400 inline-block w-28">Được giao bởi:</span> NGUYENVUSTORE
						</li>
						<li>
							<span className="text-slate-400 inline-block w-28">Phí vận chuyển:</span> 12.000đ
						</li>
					</ul>
				</div>
				{/* Mode-Of-Payment */}
				<div className="flex flex-col gap-2">
					<div className="font-semibold text-2xl">HÌNH THỨC THANH TOÁN</div>
					<ul className="bg-white px-5 py-3 h-32 flex flex-col justify-center items-start">
						<li>Thanh toán bằng ví Moca | Grab</li>
						<li>
							<i>Thanh toán thành công</i>
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-white">
				{/*information of product  */}
				<div className="w-full p-5 grid grid-cols-8 gap-y-3">
					<div className="col-span-4 font-bold text-xl">Sản phẩm</div>
					<div className="text-slate-400 text-lg">Giá</div>
					<div className="text-slate-400 text-lg">Số lượng</div>
					<div className="text-slate-400 text-lg">Giảm giá</div>
					<div className="text-slate-400 text-lg text-right pr-8">Tạm tính</div>
					<div className="col-span-8 w-full h-0.5 bg-slate-300"></div>
				</div>
				<div className="w-full p-5 grid grid-cols-8 gap-y-8">
					<div className="flex gap-2 col-span-4">
						<div className="">
							{/* image of product */}
							<img
								className="w-24 aspect-square object-cover"
								src={productImg}
								alt="Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch"
							/>
						</div>

						<div className="flex flex-col justify-between mx-2">
							{/* Name product & describe */}
							<div className="text-lg font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4 cursor-pointer">
								Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch
							</div>
							<p>Cung cấp bởi Tiki Trading</p>
							<div className="flex gap-3 items-center">
								<span className="border-2 border-slate-500 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white duration-150 hover:scale-105">
									Chat với người bán
								</span>
								<span className="border-2 border-slate-500 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white duration-150 hover:scale-105">
									Viết nhận xét
								</span>
								<span className="border-2 border-slate-500 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white duration-150 hover:scale-105">
									Mua lại
								</span>
							</div>
						</div>
					</div>
					<div className="font-semibold">92.000 đ</div>
					<div>1</div>
					<div>0 đ</div>
					<div className="text-right pr-8">92.000 đ</div>

					<div className="flex gap-2 col-span-4">
						<div className="">
							{/* image of product */}
							<img
								className="w-24 aspect-square object-cover"
								src={productImg}
								alt="Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch"
							/>
						</div>

						<div className="flex flex-col justify-between mx-2">
							{/* Name product & describe */}
							<div className="text-lg font-semibold hover:text-blue-500 hover:underline hover:underline-offset-4 cursor-pointer">
								Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch
							</div>
							<p>Cung cấp bởi Tiki Trading</p>
							<div className="flex gap-3 items-center">
								<span className="border-2 border-slate-500 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white duration-150 hover:scale-110">
									Chat với người bán
								</span>
								<span className="border-2 border-slate-500 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white duration-150 hover:scale-110">
									Viết nhận xét
								</span>
								<span className="border-2 border-slate-500 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white duration-150 hover:scale-110">
									Mua lại
								</span>
							</div>
						</div>
					</div>
					<div className="font-semibold">92.000 đ</div>
					<div>1</div>
					<div>0 đ</div>
					<div className="text-right pr-8">92.000 đ</div>
					<div className="col-span-8 w-full h-1 bg-blue-300"></div>
				</div>
				<div className="w-full p-5 grid grid-cols-8 gap-y-3">
					<div className="col-span-7 flex flex-col gap-2 items-end pr-3 font-semibold">
						Tạm tính:
					</div>
					<div className="text-right pr-8">207.000 đ</div>

					<div className="col-span-7 flex flex-col gap-2 items-end pr-3 font-semibold">
						Phí vận chuyển:
					</div>
					<div className="text-right pr-8">14.000 đ</div>
					<div className="col-span-7 flex flex-col gap-2 items-end pr-3 font-semibold">
						Tổng cộng:
					</div>
					<div className="text-right pr-8">221.000 đ</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
