import React from "react";
import { useRef } from "react";
import loginIMG from "../Assets/login.jpg";
import { register } from "../Services/account";

export default function Register() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const repeatPasswordRef = useRef();

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
			<div className="hidden sm:block">
				<img className="w-full h-full object-cover" src={loginIMG} alt="" />
			</div>

			<div className="bg-gray-800 flex flex-col justify-center">
				<form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
					<h2 className="text-4xl dark:text-white font-bold text-center">Đăng Ký</h2>
					<div className="flex flex-col text-gray-400 py-2">
						<label>Tên đăng nhập</label>
						<input
							className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
							type="text"
							ref={emailRef}
						/>
					</div>
					<div className="flex flex-col text-gray-400 py-2">
						<label>Mật khẩu</label>
						<input
							className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
							type="password"
							ref={passwordRef}
						/>
					</div>
					<div className="flex flex-col text-gray-400 py-2">
						<label>Xác nhận mật khẩu</label>
						<input
							className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
							type="password"
							ref={repeatPasswordRef}
						/>
					</div>
					<button
						className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
						onClick={(e) => {
							e.preventDefault();
							if (passwordRef.current.value !== repeatPasswordRef.current.value) {
								alert("Mật khẩu nhập lại chưa đúng");
							} else {
								register({
									email: emailRef.current.value,
									password: passwordRef.current.value,
								})
									.then((res) => {
										console.log(res);
									})
									.catch((err) => console.log(err));
							}
						}}>
						Đăng Ký
					</button>
				</form>
			</div>
		</div>
	);
}
