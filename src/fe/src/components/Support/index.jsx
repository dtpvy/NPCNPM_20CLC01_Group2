import React, { useState } from "react";

const Support = () => {
	const [role, setRole] = useState("");
	const [username, setUsername] = useState("");
	const [question, setQuestion] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ role, username, question });
	};

	return (
		<div className="p-10 flex flex-col items-center">
			<div className="flex flex-col gap-y-8 w-1/2">
				<h1 className="text-4xl font-bold">Đội chăm sóc khách hàng Shopee {":>>>>"}</h1>
				<p className="font-lg text-slate-400">
					Chúng tôi muốn lắng nghe câu hỏi và ý kiến đóng góp từ bạn. Hãy phản hồi cho chúng tôi
					biết vấn đề của bạn nhé! Chúng tôi sẽ liên hệ lại bạn trong 24h tiếp theo.
				</p>
			</div>
			<form className="w-1/2 flex flex-col gap-y-5 py-5" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="role" className="block text-xl p-5">
						Bạn cần hỗ trợ với vai trò?
					</label>
					<select
						name="role"
						value={role}
						className="block w-full h-10 px-5 bg-white rounded-md border-2 border-slate-300"
						onChange={(e) => {
							setRole(e.target.value);
						}}>
						<option value="">Chọn vai trò</option>
						<option value="seller">Người bán</option>
						<option value="buyer">Người mua</option>
					</select>
				</div>
				<div>
					<label htmlFor="username" className="block text-xl p-5">
						Tên đăng nhập
					</label>
					<input
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						name="username"
						placeholder="Nhập tên đăng nhập"
						className="block w-full h-8 p-5 rounded-md border-2 border-slate-300"
					/>
				</div>
				<div>
					<label htmlFor="role" className="block text-xl p-5">
						Bạn cần hỗ trợ với vai trò?
					</label>
					<select
						name="role"
						value={question}
						className="block w-full h-10 px-5 bg-white rounded-md border-2 border-slate-300"
						onChange={(e) => {
							setQuestion(e.target.value);
						}}>
						<option value="">Chọn câu hỏi</option>
						<option value="1">Sao app đẹp vậy?</option>
						<option value="2">Sao thằng code page này đẹp trai vậy?</option>
						<option value="2">Nhóm tính bán trang này bao nhiêu tiền?</option>
					</select>
				</div>
				<div>
					<button
						className="w-32 px-3 p-2 rounded-md bg-orange-500 text-white text-semibold"
						type="submit">
						Gửi phản hồi
					</button>
				</div>
			</form>
		</div>
	);
};

export default Support;
