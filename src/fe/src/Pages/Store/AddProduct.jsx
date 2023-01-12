import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../../Services/category";
import { createProduct } from "../../Services/product";

const AddProduct = () => {
	const navigate = useNavigate();
	const [categories, setCategories] = useState([]);
	const nameRef = useRef();
	const quantityRef = useRef();
	const descriptionRef = useRef();
	const priceRef = useRef();
	const categoryRef = useRef();
	const imageRef = useRef();

	useEffect(() => {
		getCategory().then((res) => {
			setCategories(res.data);
		});
	}, []);

	console.log(categories);

	return (
		<div className="w-1/2 mx-auto bg-slate-300 py-10 px-8 rounded-md flex flex-col items-end">
			<div className="grid grid-cols-2 mb-5 w-full">
				<div className="flex flex-col gap-3">
					<div className="p-1">Tên sản phẩm:</div>
					<div className="p-1">Số lượng đăng bán:</div>
					<div className="p-1">Mô tả:</div>
					<div className="p-1">Đơn giá:</div>
					<div className="p-1">Danh mục:</div>
					<div className="p-1">Hình ảnh:</div>
				</div>
				<div className="flex flex-col gap-3">
					<input className="p-1 rounded-md" ref={nameRef} />
					<input className="p-1 rounded-md" ref={quantityRef} />
					<input className="p-1 rounded-md" ref={descriptionRef} />
					<input className="p-1 rounded-md" ref={priceRef} />
					<select className="p-1 rounded-md" ref={categoryRef}>
						{categories.map((item) => {
							return (
								<option value={item.id} key={item.id}>
									{item.title}
								</option>
							);
						})}
					</select>
					<input
						className="p-1 rounded-md"
						ref={imageRef}
						placeholder="Dán link hình ảnh vào đây"
					/>
				</div>
			</div>
			<div
				className="bg-sky-500 px-2 py-1 rounded-md hover:bg-sky-700 hover:scale-105 duration-150 cursor-pointer text-white"
				onClick={() => {
					const data = {
						name: nameRef.current.value,
						quantity: parseInt(quantityRef.current.value),
						description: descriptionRef.current.value,
						price: parseInt(priceRef.current.value),
						old_price: parseInt(priceRef.current.value),
						category_id: categoryRef.current.value,
						image: imageRef.current.value,
					};
					createProduct(data)
						.then((res) => {
							console.log("success");
							navigate("/store");
						})
						.catch((err) => console.log(err));
				}}>
				Tạo sản phẩm
			</div>
		</div>
	);
};

export default AddProduct;
