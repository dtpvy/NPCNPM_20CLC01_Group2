import React from "react";

import avatar from "./avatar.png";
import account from "./account.png";
import bill from "./bill.png";
import sp from "./sp.png";

import Header from "../Header";

export default function Bought() {
	return (
		<div>
			{/* <header><Header/></header> */}
			<div class="grid grid-cols-3 gap-4 px-8">
				<div class="flex-row">
					<div class="bg-gray-100 p-5">
						{/* <div class="h-10"><img src={avatar}  /></div> */}
						<div class="font-bold">Cái Minh Chánh</div>
						<div class="opacity-60">Sửa hồ sơ</div>
					</div>
				</div>

				<div class="bg-gray-100 col-span-2 p-5">
					<div class="text-xl font-semibold">Đơn hàng đã mua</div>
					<div class="opacity-60">Tra cứu các đơn hàng đã mua </div>
				</div>
				<div class=" p-5 flex flex-col gap-y-7 ">
					<div class="flex flex-row">
						<img class="" src={account} alt="" />
						<button class="text-2xl">Tài khoản của tôi</button>
					</div>
					<div class="flex flex-row">
						<img class="" src={bill} alt="" />
						<button class="text-2xl">Đơn hàng đã mua</button>
					</div>
					<div class="flex flex-row gap-x-2">
						<img class="w-12 h-12" src={sp} alt="" />
						<button class="text-2xl">Yêu cầu hỗ trợ</button>
					</div>
				</div>
				<div>
					<div class="flex flex-row gap-x-5 gap-y-5 p-2 text-xl col-span-2 justify-start items-start flex-nowrap w-max">
						<button class="border-b-2 border-sky-100 hover:border-sky-500">Tất cả</button>
						<button class="border-b-2 border-sky-100 hover:border-sky-500">Chờ xác nhận</button>
						<button class="border-b-2 border-sky-100 hover:border-sky-500">Chờ lấy hàng</button>
						<button class="border-b-2 border-sky-100 hover:border-sky-500">Đang giao</button>
						<button class="border-b-2 border-sky-100 hover:border-sky-500">Đã giao</button>
						<button class="border-b-2 border-sky-100 hover:border-sky-500">Đã hủy</button>
						<button class="border-b-2 border-sky-100 hover:border-sky-500">
							Trả hàng/Hoàn tiền
						</button>
					</div>
					<div class="p-5 flex justify-center  w-max items-center text-2xl font-bold">
						Hiện tại bạn chưa có đơn hàng nào, hãy tiếp tục mua sắm nhé!
					</div>
				</div>
			</div>
		</div>
	);
}
