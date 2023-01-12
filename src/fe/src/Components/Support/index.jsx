import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createReport } from "../../Services/report";

const Support = () => {
	const navigate = useNavigate();

	const [submited, setSubmited] = useState(false);

	const titleRef = useRef();
	const contentRef = useRef();

	return (
		<div className="flex flex-col items-center">
			{!submited ? (
				<>
					<div className="flex flex-col gap-y-8 w-1/2">
						<h1 className="text-4xl font-bold">Đội chăm sóc khách hàng Webanhang {":>>>>"}</h1>
						<p className="font-lg text-slate-400">
							Chúng tôi muốn lắng nghe câu hỏi và ý kiến đóng góp từ bạn. Hãy phản hồi cho chúng tôi
							biết vấn đề của bạn nhé! Chúng tôi sẽ liên hệ lại bạn trong 24h tiếp theo.
						</p>
					</div>
					<form className="w-1/2 flex flex-col gap-y-2 mt-2">
						<div>
							<label htmlFor="title" className="block text-xl py-5">
								Câu hỏi của bạn:
							</label>
							<select
								name="title"
								ref={titleRef}
								className="block w-full h-10 px-5 bg-white rounded-md border-2 border-slate-300">
								<option value="">Chọn câu hỏi</option>
								<option value="Lỗi giao dịch">Gặp trục trặc trong giao dịch?</option>
								<option value="Lỗi ứng dụng">Có lỗi của ứng dụng?</option>
								<option value="Lỗi tài khoản">Thay đổi thông tin tài khoản?</option>
							</select>
						</div>
						<div>
							<label htmlFor="content" className="block text-xl py-5">
								Nội dung câu hỏi:
							</label>
							<textarea
								placeholder="Nhập nội dung câu hỏi tại đây"
								className="block w-full h-32 px-5 py-3 bg-white rounded-md border-2 border-slate-300 resize-none"
								ref={contentRef}
							/>
						</div>
						<div className="mt-5">
							<button
								className="w-32 px-3 p-2 rounded-md bg-sky-600 text-white text-semibold hover:bg-sky-800 hover:scale-105 duration-300"
								onClick={(e) => {
									e.preventDefault();
									if (titleRef.current.value === "") {
										alert("Vui lòng chọn câu hỏi");
									} else if (contentRef.current.value === "") {
										alert("Vui lòng nhập nội dung câu hỏi");
									} else {
										const data = {
											title: titleRef.current.value,
											content: contentRef.current.value,
										};
										createReport(data)
											.then((res) => {
												setSubmited(true);
											})
											.catch((err) => console.log(err));
									}
								}}>
								Gửi phản hồi
							</button>
						</div>
					</form>
				</>
			) : (
				<>
					<div className="w-1/2 flex flex-col items-center gap-5 mt-8">
						<h1 className="text-4xl font-bold">Báo cáo của bạn đã được gửi</h1>
						<p className="font-lg text-slate-400">
							Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất !
						</p>
						<button
							className="bg-sky-600 hover:bg-sky-800 hover:scale-105 text-white duration-300 px-6 py-3 rounded-md mt-5"
							onClick={() => {
								navigate("/");
							}}>
							Tiếp tục mua sắm
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Support;
