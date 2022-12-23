import React, { useState, useRef } from "react";

import avatar from "./avatar.png";
import Template from "./Template";

const data = [
	{ name: "Tên đăng nhập", value: "Caiminhchanh" },
	{ name: "Tên người dùng", value: "MinhChanh" },
	{ name: "Email", value: "cmchanh@yahoo.com" },
	{ name: "Số điện thoại", value: "0123456789" },
	{ name: "Giới tính", value: "Nam" },
	{ name: "Ngày sinh", value: "28/03/2002" },
];

export default function EditProfile() {
	const usernameRef = useRef();
	const fullnameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();

	const [gender, setGender] = useState(data[4].value);
	const dob = data[5].value.split("/");
	const [day, setDay] = useState(dob[0]);
	const [month, setMonth] = useState(dob[1]);
	const [year, setYear] = useState(dob[2]);

	return (
		<div>
			<Template>
				<form
					className="px-5"
					onSubmit={(e) => {
						e.preventDefault();
						console.log(usernameRef.current.value);
						console.log(fullnameRef.current.value);
						console.log(emailRef.current.value);
						console.log(phoneRef.current.value);
					}}>
					<div className="grid grid-cols-[1.5fr_3fr] mb-5">
						<div className="flex flex-col gap-4">
							{data.map((field) => {
								return (
									<div key={field.name} className="text-slate-500 border-2 border-transparent py-1">
										{field.name}:
									</div>
								);
							})}
						</div>
						<div className="flex flex-col gap-4">
							<input
								ref={usernameRef}
								name="username"
								defaultValue={data[0].value}
								className="w-full border-2 border-slate-300 px-2 py-1"
							/>
							<input
								ref={fullnameRef}
								name="fullname"
								defaultValue={data[1].value}
								className="w-full border-2 border-slate-300 px-2 py-1"
							/>
							<input
								ref={emailRef}
								name="email"
								defaultValue={data[2].value}
								className="w-full border-2 border-slate-300 px-2 py-1"
							/>
							<input
								ref={phoneRef}
								name="phone"
								defaultValue={data[3].value}
								className="w-full border-2 border-slate-300 px-2 py-1"
							/>
							<div className="flex gap-4 w-full border-2 border-transparent py-1">
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
							</div>
							<div className="flex gap-2 w-full border-2 border-transparent py-1">
								<select
									className="w-14 bg-slate-200 px-2 py-1 hover:bg-slate-300 rounded-sm"
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
									className="w-14 bg-slate-200 px-2 py-1 hover:bg-slate-300 rounded-sm"
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
									className="w-20 bg-slate-200 px-2 py-1 hover:bg-slate-300 rounded-sm"
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
							</div>
						</div>
					</div>
					<button className="bg-sky-600 px-6 py-1 rounded-md text-white cursor-pointer inline-block hover:bg-sky-800 hover:scale-105 duration-300">
						Lưu
					</button>
				</form>
				<div className="p-5 flex flex-col justify-center items-center gap-y-2">
					<div className="w-48 aspect-square p-2 bg-slate-200 rounded-full flex items-center justify-center">
						<img className="w-full" src={avatar} alt="" />
					</div>

					<div className="bg-sky-600 px-6 py-1 rounded-md text-white cursor-pointer inline-block hover:bg-sky-800 hover:scale-105 duration-300">
						Chọn ảnh
					</div>
					<div className="w-48 mt-4 h-0.5 bg-green-200"></div>
					<div className="flex flex-col gap-2">
						<div className="text-slate-500">
							Dung lượng file tối đa: <span className="text-black">1MB</span>
						</div>
						<div className="text-slate-500">
							Định dạng: <span className="text-black">.JPEG, .PNG</span>
						</div>
					</div>
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
