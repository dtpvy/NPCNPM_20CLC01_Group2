import React, { useRef } from "react";
import loginIMG from "../Assets/login.jpg";
import { login } from "../Services/account";

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
			<div className="hidden sm:block">
				<img className="w-full h-full object-cover" src={loginIMG} alt="" />
			</div>

			<div className="bg-gray-800 flex flex-col justify-center">
				<form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
					<h2 className="text-4xl dark:text-white font-bold text-center">Đăng nhập</h2>
					<div className="flex flex-col text-gray-400 py-2">
						<label>Tên đăng nhập</label>
						<input
							ref={emailRef}
							className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
							type="text"
							autoComplete="username"
						/>
					</div>
					<div className="flex flex-col text-gray-400 py-2">
						<label>Mật khẩu</label>
						<input
							ref={passwordRef}
							className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
							type="password"
							autoComplete="current-password"
						/>
					</div>
					<div className="flex justify-between text-gray-400 py-2">
						<p className="flex items-center">
							<input className="mr-2" type="checkbox" /> Lưu mật khẩu{" "}
						</p>
						<p>Quên mật khẩu? </p>
					</div>
					<div className=" flex justify-between  text-gray-400 py-2">
						<a className="italic" href="/register/">
							Chưa có tài khoản?{" "}
						</a>
					</div>
					<button
						className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
						onClick={(e) => {
							e.preventDefault();
							const data = {
								email: emailRef.current.value,
								password: passwordRef.current.value,
							};
							localStorage.removeItem("access-token");
							login(data)
								.then((res) => {
									console.log("success");
									console.log(res);
									localStorage.setItem("access-token", res.data.access_token);
								})
								.catch((err) => {
									console.log("err");
									console.log(err);
								});
						}}>
						Đăng nhập
					</button>
				</form>
			</div>
		</div>
	);
}
