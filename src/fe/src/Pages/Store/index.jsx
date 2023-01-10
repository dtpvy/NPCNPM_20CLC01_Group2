import React, { useState, useEffect } from "react";
import { getOrderSeller, updateStatusOrder } from "../../Services/order";
import { getStoreInfo } from "../../Services/store";

const Products = ({ data }) => {
	return (
		<div className="bg-white p-3">
			{data.products.map((item) => {
				return (
					<div key={item.id} className="grid grid-cols-3 mb-4">
						<div>{item.name}</div>
						<div>{item.quantity}</div>
						<div>{item.price}</div>
					</div>
				);
			})}
		</div>
	);
};

const Orders = ({ data }) => {
	return (
		<div className="bg-white p-3">
			{data.map((item, index) => {
				return (
					<div key={index}>
						<div>Người mua: {item.order.user.fullname}</div>
						<div>Sản phẩm: {item.items[0].name}</div>
						<div>Số lượng: {item.items[0].quantity}</div>
						<div>Trạng thái: {item.status}</div>
						{item.status === "đang chuẩn bị" ? (
							<div
								onClick={() => {
									updateStatusOrder(item.order_id, "đang giao", true).catch((err) =>
										console.log(err)
									);
								}}>
								Giao hàng
							</div>
						) : (
							<></>
						)}
					</div>
				);
			})}
		</div>
	);
};

const Store = () => {
	const [tab, setTab] = useState("product");
	const [productData, setProductData] = useState({ products: [] });
	const [orderData, setOrderData] = useState([]);

	useEffect(() => {
		getStoreInfo("4d94422a-5471-4828-a122-dcf2ad249e7a")
			.then((res) => {
				console.log("success");
				console.log(res);
				setProductData(res.data.store[0]);
			})
			.catch((err) => console.log(err));

		getOrderSeller()
			.then((res) => {
				console.log("success");
				setOrderData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="flex">
				<div
					className="px-4 py-3 cursor-pointer hover:bg-slate-300"
					style={{ backgroundColor: tab === "product" ? "white" : "" }}
					onClick={() => {
						setTab("product");
					}}>
					Sản phẩm của tôi
				</div>
				<div
					className="px-4 py-3 cursor-pointer hover:bg-slate-300"
					style={{ backgroundColor: tab === "order" ? "white" : "" }}
					onClick={() => {
						setTab("order");
					}}>
					Đơn hàng của tôi
				</div>
			</div>
			{tab === "product" && <Products data={productData} />}
			{tab === "order" && <Orders data={orderData} />}
		</>
	);
};

export default Store;
