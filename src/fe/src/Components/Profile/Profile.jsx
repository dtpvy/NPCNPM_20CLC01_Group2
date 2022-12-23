import React from "react";

import avatar from "./avatar.png";
import account from "./account.png";
import bill from "./bill.png";
import support from "./sp.png";

const data = [
	{ name: "Tên đăng nhập", value: "Caiminhchanh" },
	{ name: "Tên người dùng", value: "MinhChanh" },
	{ name: "Email", value: "cm********@yahoo.com" },
	{ name: "Số điện thoại", value: "*********36" },
	{ name: "Giới tính", value: "Nam" },
	{ name: "Ngày sinh", value: "28/03/2002" },
];

const buttons = [
	{ image: account, text: "Tài khoản của tôi" },
	{ image: bill, text: "Đơn hàng đã mua" },
	{ image: support, text: "Yêu cầu hỗ trợ" },
];

export default function Profile() {
	return (
		<div>
			{/* Header */}
			{/* <header><Header/></header> */}
			{/* body */}
			<div className="flex flex-col gap-10">
				<div className="grid grid-cols-3">
					<div className="bg-gray-100 p-5 mr-5 rounded-md">
						<div className="font-bold text-2xl">Cái Minh Chánh</div>
						<div className="text-slate-400">Sửa hồ sơ</div>
					</div>
					<div className="bg-gray-100 col-span-2 p-5 rounded-md">
						<div className="font-semibold text-2xl">Hồ sơ của tôi</div>
						<div className="text-slate-400">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
					</div>
				</div>
				<div className="grid grid-cols-3 divide-x">
					<div className="flex flex-col divide-y mr-5">
						{buttons.map((button) => {
							return (
								<div className="flex items-end gap-x-2 hover:bg-slate-100 py-3 pl-3 hover:font-semibold cursor-pointer">
									<img className="w-12 aspect-square" src={button.image} alt="" />
									<div className="text-2xl">{button.text}</div>
								</div>
							);
						})}
					</div>
					<div className="p-5 flex-col">
						<form action="">
							<div className="grid grid-cols-2 gap-4">
								{data.map((field) => {
									return (
										<>
											<div className="text-slate-500">{field.name}:</div>
											<div>{field.value}</div>
										</>
									);
								})}
							</div>
						</form>
						<br />
						<div className="bg-sky-600 px-6 py-1 rounded-md text-white cursor-pointer inline-block hover:bg-sky-800 hover:scale-105 duration-300">
							Sửa
						</div>
					</div>
					<div className="flex flex-col justify-center items-center gap-y-2">
						<div className="w-48 aspect-square p-2 bg-slate-200 rounded-full flex items-center justify-center">
							<img className="w-full" src={avatar} alt="" />
						</div>

						<div className="bg-sky-600 px-6 py-1 rounded-md text-white cursor-pointer inline-block hover:bg-sky-800 hover:scale-105 duration-300">
							Chọn ảnh
						</div>
						<div className="flex flex-row text-slate-400">Gia nhập 123 ngày trước</div>
						<div className="flex flex-row text-slate-400"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
