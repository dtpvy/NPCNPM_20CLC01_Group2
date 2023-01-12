import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserQuery } from "../../app/slice/userSlice";
import { getUserInfo } from "../../Services/account";

import avatar from "./avatar.png";
import Template from "./Template";

const data = [
	{ key: "fullname", label: "Tên người dùng" },
	{ key: "seller_name", label: "Tên người bán" },
	{ key: "email", label: "Email" },
	{ key: "phone", label: "Số điện thoại" },
	{ key: "address", label: "Địa chỉ" },
];

const dateDiff = (start, end) => {
	if (!end) {
		end = new Date();
	}
	const t1 = Date.parse(start);
	const t2 = Date.parse(end);
	return Math.floor((t2 - t1) / (24 * 3600 * 1000));
};

export default function Profile() {
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	useEffect(() => {
		getUserInfo()
			.then((res) => setUser(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Template>
				<div className="px-5">
					<div>
						<div className="grid grid-cols-2 gap-4 mb-5">
							<div className="flex flex-col gap-4">
								{data.map((field) => {
									return (
										<div key={field.key} className="text-slate-500">
											{field.label}:
										</div>
									);
								})}
							</div>
							<div className="flex flex-col gap-4">
								{data.map((field) => {
									if (field.key !== "dateOfBirth")
										return <div key={field.label}>{user[field.key]}</div>;
									const [year, month, day] = user["dateOfBirth"].split("-");
									return <div key={"Ngày sinh"}>{`${day}/${month}/${year}`}</div>;
								})}
							</div>
						</div>
					</div>

					<div
						className="bg-sky-600 px-6 py-1 rounded-md text-white cursor-pointer inline-block hover:bg-sky-800 hover:scale-105 duration-300"
						onClick={() => {
							navigate("edit");
						}}>
						Sửa
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-y-2">
					<div className="w-48 aspect-square p-2 bg-slate-400 rounded-full flex items-center justify-center overflow-hidden">
						<img className="w-full" src={user.image} alt="cannot load image" />
					</div>
					<div className="w-48 mt-4 h-0.5 bg-green-200"></div>
					{/* <div className="bg-sky-600 px-6 py-1 rounded-md text-white cursor-pointer inline-block hover:bg-sky-800 hover:scale-105 duration-300">
						Chọn ảnh
					</div> */}
					<div className="flex flex-row text-slate-400">
						Gia nhập {dateDiff(user.created_at)} ngày trước
					</div>
					<div className="flex flex-row text-slate-400"></div>
				</div>
			</Template>
		</div>
	);
}
