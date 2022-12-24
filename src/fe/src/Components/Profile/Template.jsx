import React from "react";
import account from "./account.png";
import bill from "./bill.png";
import support from "./sp.png";

const buttons = [
	{ image: account, text: "Tài khoản của tôi" },
	{ image: bill, text: "Đơn hàng đã mua" },
	{ image: support, text: "Yêu cầu hỗ trợ" },
];

const Template = ({ children }) => {
	return (
		<div>
			<div className="flex flex-col gap-10">
				<div className="grid grid-cols-3">
					<div className="bg-white p-5 mr-5">
						<div className="font-bold text-2xl">Cái Minh Chánh</div>
						<div className="text-slate-400">Sửa hồ sơ</div>
					</div>
					<div className="bg-white col-span-2 p-5">
						<div className="font-semibold text-2xl">Hồ sơ của tôi</div>
						<div className="text-slate-400">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
					</div>
				</div>
				<div className="grid grid-cols-3 divide-x divide-slate-400">
					<div className="flex flex-col divide-y divide-slate-400 mr-5">
						{buttons.map((button) => {
							return (
								<div
									key={button.text}
									className="flex items-end gap-x-2 hover:bg-slate-100 py-3 pl-3 hover:font-semibold cursor-pointer">
									<img className="w-12 aspect-square" src={button.image} alt="" />
									<div className="text-2xl">{button.text}</div>
								</div>
							);
						})}
					</div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Template;
