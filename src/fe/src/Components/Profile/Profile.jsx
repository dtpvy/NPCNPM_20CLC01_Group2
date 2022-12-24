import React from "react";

import avatar from "./avatar.png";
import Template from "./Template";

const data = [
	{ name: "Tên đăng nhập", value: "Caiminhchanh" },
	{ name: "Tên người dùng", value: "MinhChanh" },
	{ name: "Email", value: "cm********@yahoo.com" },
	{ name: "Số điện thoại", value: "*********36" },
	{ name: "Giới tính", value: "Nam" },
	{ name: "Ngày sinh", value: "28/03/2002" },
];

export default function Profile() {
	return (
		<div>
			<Template>
				<div className="px-5">
					<div>
						<div className="grid grid-cols-2 gap-4 mb-5">
							<div className="flex flex-col gap-4">
								{data.map((field) => {
									return (
										<div key={field.name} className="text-slate-500">
											{field.name}:
										</div>
									);
								})}
							</div>
							<div className="flex flex-col gap-4">
								{data.map((field) => {
									return <div key={field.name + "_value"}>{field.value}</div>;
								})}
							</div>
						</div>
					</div>

					<div className="bg-sky-600 px-6 py-1 rounded-md text-white cursor-pointer inline-block hover:bg-sky-800 hover:scale-105 duration-300">
						Sửa
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-y-2">
					<div className="w-48 aspect-square p-2 bg-slate-400 rounded-full flex items-center justify-center">
						<img className="w-full" src={avatar} alt="" />
					</div>
					<div className="w-48 mt-4 h-0.5 bg-green-200"></div>
					{/* <div className="bg-sky-600 px-6 py-1 rounded-md text-white cursor-pointer inline-block hover:bg-sky-800 hover:scale-105 duration-300">
						Chọn ảnh
					</div> */}
					<div className="flex flex-row text-slate-400">Gia nhập 123 ngày trước</div>
					<div className="flex flex-row text-slate-400"></div>
				</div>
			</Template>
		</div>
	);
}
