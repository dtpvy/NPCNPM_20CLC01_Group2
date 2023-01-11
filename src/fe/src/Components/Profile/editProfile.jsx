import React, { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { getUserInfo, updateUserInfo } from "../../Services/account";

import avatar from "./avatar.png";
import Template from "./Template";

const data = [
	{ key: "fullname", label: "Tên người dùng" },
	{ key: "seller_name", label: "Tên người bán" },
	{ key: "email", label: "Email" },
	{ key: "phone", label: "Số điện thoại" },
	{ key: "address", label: "Địa chỉ" },
];

export default function EditProfile() {
	const [user, setUser] = useState({});
	useEffect(() => {
		getUserInfo()
			.then((res) => setUser(res.data))
			.catch((err) => console.log(err));
	}, []);

	const navigate = useNavigate();

	const fullnameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const sellerNameRef = useRef();
	const addressRef = useRef();
	const imageRef = useRef();

	const [image, setImage] = useState(user.image);

	return (
		<div>
			<Template>
				<form
					className="px-5"
					onSubmit={(e) => {
						e.preventDefault();
						const data = {
							seller_name: sellerNameRef.current.value,
							fullname: fullnameRef.current.value,
							email: emailRef.current.value,
							phone: phoneRef.current.value,
							address: addressRef.current.value,
							updated_at: new Date().toISOString(),
						};
						if (imageRef.current.value !== "") {
							data["image"] = imageRef.current.value;
						}
						console.log({ ...user, ...data });
						updateUserInfo(data)
							.then((res) => {
								navigate("/profile");
							})
							.catch((err) => console.log(err));
					}}>
					<div className="grid grid-cols-[1.5fr_3fr] mb-5">
						<div className="flex flex-col gap-4">
							{data.map((field) => {
								return (
									<div
										key={field.label}
										className="text-slate-500 border-2 border-transparent py-1">
										{field.label}:
									</div>
								);
							})}
						</div>
						<div className="flex flex-col gap-4">
							<input
								ref={fullnameRef}
								name="fullname"
								defaultValue={user["fullname"]}
								className="w-full border-2 border-slate-300 px-2 py-1"
							/>
							<input
								ref={sellerNameRef}
								name="seller_name"
								defaultValue={user["seller_name"]}
								className="w-full border-2 border-slate-300 px-2 py-1"
							/>
							<input
								ref={emailRef}
								name="email"
								defaultValue={user["email"]}
								className="w-full border-2 border-slate-300 px-2 py-1"
							/>
							<input
								ref={phoneRef}
								name="phone"
								defaultValue={user["phone"]}
								className="w-full border-2 border-slate-300 px-2 py-1"
							/>
							<input
								ref={addressRef}
								name="address"
								defaultValue={user["address"]}
								className="w-full border-2 border-slate-300 px-2 py-1"
							/>
							{/* <div className="flex gap-4 w-full border-2 border-transparent py-1">
								{genders.map((g) => {
									<div className="flex gap-1">
										<input
											key={g}
											type="radio"
											name={g}
											checked={gender === g}
											onChange={() => {
												setGender(g);
											}}
										/>
										<label htmlFor={g}>{g}</label>
									</div>;
								})}
								<div className="flex gap-1">
									<input
										type="radio"
										id="nam"
										name="gioitinh"
										checked={gender === "Nam"}
										onChange={() => {
											setGender("Nam");
										}}
									/>
									<label htmlFor="gioitinh">Nam</label>
								</div>
								<div className="flex gap-1">
									<input
										type="radio"
										id="nu"
										name="gioitinh"
										checked={gender === "Nữ"}
										onChange={() => {
											setGender("Nữ");
										}}
									/>
									<label htmlFor="gioitinh">Nữ</label>
								</div>
								<div className="flex gap-1">
									<input
										type="radio"
										id="khac"
										name="gioitinh"
										checked={gender === "Khác"}
										onChange={() => {
											setGender("Khác");
										}}
									/>
									<label htmlFor="gioitinh">Khác</label>
								</div>
							</div> */}
							{/* <div className="flex gap-2 w-full border-2 border-transparent py-1">
								<select
									className="w-14 bg-white px-2 py-1 hover:bg-slate-300 rounded-sm"
									name="day"
									value={day}
									onChange={(e) => {
										setDay(e.target.value);
									}}>
									{days.map((x) => {
										return (
											<option key={x} value={x}>
												{x}
											</option>
										);
									})}
								</select>

								<select
									className="w-14 bg-white px-2 py-1 hover:bg-slate-300 rounded-sm"
									name="month"
									value={month}
									onChange={(e) => {
										setMonth(e.target.value);
									}}>
									{months.map((x) => {
										return (
											<option key={x} value={x}>
												{x}
											</option>
										);
									})}
								</select>

								<select
									className="w-20 bg-white px-2 py-1 hover:bg-slate-300 rounded-sm"
									name="year"
									value={year}
									onChange={(e) => {
										setYear(e.target.value);
									}}>
									{years.map((x) => {
										return (
											<option key={x} value={x}>
												{x}
											</option>
										);
									})}
								</select>
							</div> */}
						</div>
					</div>
					<button
						className="bg-sky-600 px-6 py-1 rounded-md text-white cursor-pointer inline-block hover:bg-sky-800 hover:scale-105 duration-300"
						type="submit">
						Lưu
					</button>
				</form>
				<div className="p-5 flex flex-col justify-center items-center gap-y-2">
					<div className="w-48 aspect-square p-2 bg-slate-400 rounded-full flex items-center justify-center">
						<img className="w-full" src={image} alt="cannot load image" />
					</div>
					<div className="flex flex-col gap-2">
						<div>Copy Link ảnh vào đây để thay đổi ảnh đại diện: </div>
						<input
							defaultValue={image}
							className="w-full rounded-md h-8 p-2"
							ref={imageRef}
							onChange={(e) => {
								setImage(e.target.value);
							}}
						/>
					</div>
					<div className="w-48 h-0.5 bg-green-300 mt-4"></div>
				</div>
			</Template>
		</div>
	);
}

const genders = ["Nam", "Nữ", "Khác"];

const days = [...Array(31).keys()].map((x) => {
	x = x + 1;
	if (x > 9) return x.toString();
	return "0" + x.toString();
});

const months = [...Array(12).keys()].map((x) => {
	x = x + 1;
	if (x > 9) return x.toString();
	return "0" + x.toString();
});

const years = [...Array(100).keys()].map((x) => {
	x = parseInt(new Date().getFullYear()) - x;
	return x.toString();
});
