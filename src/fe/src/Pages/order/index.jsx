import React from "react";
import productImg from "../../components/Images/product-1.png";

const Order = () => {
	return (
		<div className="my-4">
			{/* Information of customer */}
			<div className="flex justify-between mx-4">
				{/* Address of customer */}
				<div className="w-1/3">
					<div className="font-semibold text-2xl">ĐỊA CHỈ NGƯỜI NHẬN</div>
					<ul className="bg-[#f5f5fa] px-2 h-24">
						<li>Vy Do</li>
						<li>
							<span>Địa chỉ:</span> 227 Nguyễn Văn Cừ, quận 5
						</li>
						<li>
							<span>Số điện thoại:</span> 0349732872
						</li>
					</ul>
				</div>
				{/* "Mode-Of-Delivery" */}
				<div className="w-1/3">
					<div className="mx-2 font-semibold text-2xl">HÌNH THỨC GIAO HÀNG</div>
					<ul className="bg-[#f5f5fa] mx-2 px-2 h-24">
						<li>Giao tiết kiệm</li>
						<li>Giao vào Thứ tư, 12/10</li>
						<li>Được giao bởi NGUYENVUSTORE</li>
						<li>Phí vận chuyển: 12.000đ</li>
					</ul>
				</div>
				{/* Mode-Of-Payment */}
				<div className="w-1/3">
					<div className="font-semibold text-2xl">HÌNH THỨC THANH TOÁN</div>
					<ul className="bg-[#f5f5fa] px-2 h-24 ">
						<li>Thanh toán bằng ví Moca|Grab</li>
						<li>
							<i>Thanh toán thành công</i>
						</li>
					</ul>
				</div>
			</div>

			{/*information of product  */}
			<table className="bg-[#f5f5fa] my-4 ml-4 mr-4 w-full">
				<thead>
					<tr className="px-5 py-1.5 text-left">
						<th>Sản phẩm</th>
						<th>Giá</th>
						<th>Số lượng</th>
						<th>Giảm giá</th>
						<th>Tạm tính</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="flex">
							{" "}
							{/*"Sản phẩm"*/}
							<div>
								{/* image of product */}
								<img
									className="w-24 h-24 object-cover"
									src={productImg}
									alt="Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch"
								/>
							</div>
							<div className="flex flex-col justify-between mx-2">
								{/* Name product & describe */}
								<a href="link dẫn tới sản phẩm">Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch</a>
								<p>Cung cấp bởi Tiki Trading</p>
								<div className="">
									<span className="border-solid border-2   divide-gray-100 mr-2">
										Chat với nhà bán
									</span>
									<span className="border-solid border-2   mx-2">Viết nhận xét</span>
									<span className="border-solid border-2   mx-2">Mua lại</span>
								</div>
							</div>
						</td>
						<td>
							{" "}
							{/*Giá*/}
							92.000 đ
						</td>
						<td>1</td>
						<td>0 đ</td>
						<td>92.000 đ</td>
					</tr>
					<br />
					<tr>
						<td className="flex">
							{" "}
							{/*"Sản phẩm"*/}
							<div>
								{/* image of product */}
								<img
									className="w-24 h-24 object-cover"
									src={productImg}
									alt="Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch"
								/>
							</div>
							<div className="flex flex-col justify-between mx-2">
								{/* Name product & describe */}
								<a href="link dẫn tới sản phẩm">Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch</a>
								<p>Cung cấp bởi Tiki Trading</p>
								<div className="">
									<span className="border-solid border-2  divide-gray-100 mr-2">
										Chat với nhà bán
									</span>
									<span className="border-solid border-2  mx-2">Viết nhận xét</span>
									<span className="border-solid border-2  mx-2">Mua lại</span>
								</div>
							</div>
						</td>
						<td>
							{" "}
							{/*Giá*/}
							92.000 đ
						</td>
						<td>1</td>
						<td>0 đ</td>
						<td>92.000 đ</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="4" className="text-right px-5 py-1.5">
							<span>Tạm tính</span>
						</td>
						<td>207.000 đ</td>
					</tr>
					<tr>
						<td colspan="4" className="text-right px-5 py-1.5">
							<span>Phí vận chuyển</span>
						</td>
						<td>14.000 đ</td>
					</tr>
					<tr>
						<td colspan="4" className="text-right px-5 py-1.5">
							<span>Tổng cộng</span>
						</td>
						<td>
							<span>221.000 đ</span>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default Order;
