import React, { useState } from "react";

import Template from "./Template";

export default function Bought() {
	const [option, setOption] = useState("Tất cả");

	return (
		<Template>
			<div className="pl-5 w-full col-span-2">
				<div className="flex text-xl col-span-2 justify-start items-start flex-nowrap h-10">
					{options.map((x) => {
						return (
							<button
								style={{ backgroundColor: option === x ? "white" : "" }}
								className="px-2 h-full hover:bg-slate-300"
								onClick={() => {
									setOption(x);
								}}>
								<span
									style={{
										borderBottom: option === x ? "3px solid blue" : "",
										transition: "border-width 100ms linear, background-color 100ms linear",
									}}>
									{x}
								</span>
							</button>
						);
					})}
				</div>
				<div className="w-full bg-white py-5 px-10 flex justify-center items-center text-2xl font-bold">
					Hiện tại bạn chưa có đơn hàng nào, hãy tiếp tục mua sắm nhé!
				</div>
			</div>
		</Template>
	);
}

const options = ["Tất cả", "Chờ xác nhận", "Đang giao", "Đã giao", "Đã hủy", "Trả hàng/ hoàn tiền"];
