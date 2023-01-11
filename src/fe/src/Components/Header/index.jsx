import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../../Services/category";
import avatar from "./avatar.png";
import "./header.css";
import { getAllProduct } from "../../Services/product";

export default function Header() {
	const navigate = useNavigate();
	const [products, setProducts] = useState(getAllProduct());
	const [categories, setCategories] = useState([]);

	const [searchField, setSearchField] = useState("");
	const [productsFound, setProductsFound] = useState([]);
	const [catsFound, setCatsFound] = useState([]);

	// useEffect(() => {
	// 	getCategory().then((res) => {
	// 		console.log(res);
	// 		setCategories(res.data);
	// 	});
	// }, []);
	const onSearchFieldChange = (event) => {
		setSearchField(event.target.value);
		setCatsFound(
			categories.filter((item) => item.name.toLowerCase().includes(searchField.toLowerCase()))
		);
		setProductsFound(
			products.filter((item) => item.name.toLowerCase().includes(searchField.toLowerCase()))
		);
	};

	const found1 = categories
		.filter((item) => item.name.toLowerCase().includes(searchField.toLowerCase()))
		.map((item, i) => {
			if (searchField != "") {
				return (
					<li
						key={i}
						className="bg-amber-100	px-3 py-2 hover:bg-amber-300 cursor-pointer"
						onClick={() => {
							navigate(`/category`); //sửa thêm id
						}}>
						{item.name} - danh mục
					</li>
				);
			}
		});

	const found2 = products
		.filter((item) => item.name.toLowerCase().includes(searchField.toLowerCase()))
		.map((item, i) => {
			if (searchField != "") {
				return (
					<li
						key={i * 5}
						className="bg-cyan-100 px-3 py-2 cursor-pointer hover:bg-cyan-300"
						onClick={() => {
							navigate(`/detail/${item.id}`);
						}}>
						{item.name} - sản phẩm
					</li>
				);
			}
		});

	const found = useMemo(() => {
		if (searchField != "") {
			return found1.concat(found2);
		}
		return <></>;
	}, [searchField, found1, found2]);

	return (
		<header className="bg-sky-600 flex items-center justify-center h-24">
			<div
				className="text-white p-3 bg-red-300 cursor-pointer"
				onClick={() => {
					navigate("/");
				}}>
				<span>Webanhang</span>
				<p>Logo</p>
			</div>
			<div className="w-5/12 md:w-7/12 mx-20 flex flex-col justify-start ">
				<div className="flex items-center h-9 mb-1 relative">
					<input
						type="text"
						value={searchField}
						className="h-full w-6/12 md:w-9/12 pl-3 rounded-md"
						placeholder="Tìm nhanh sản phẩm tại đây"
						onChange={onSearchFieldChange}
						id="search-bar"
					/>

					<ul className="absolute top-9 left-1/12 bg-white w-9/12 rounded-b-md overflow-hidden">
						{found}
					</ul>
				</div>
			</div>
			<div className="flex gap-4 items-center">
				<div className="flex gap-2 items-center">
					<div className="bg-white flex justify-center items-center rounded-full">
						<img src={avatar} alt="" className="h-10 block" />
					</div>
					<div className="flex flex-col">
						<p className="">User name</p>
						<div className="dropdown">
							<button className="dropbtn">
								Tùy chọn <i className="fa fa-caret-down"></i>
							</button>
							<div className="dropdown-content">
								<div
									className="cursor-pointer hover:bg-slate-400 px-2 py-1"
									onClick={() => {
										navigate("/profile");
									}}>
									Tài khoản
								</div>
								<div
									className="cursor-pointer hover:bg-slate-400 px-2 py-1"
									onClick={() => {
										localStorage.removeItem("access-token");
										navigate("/login");
									}}>
									Đăng xuất
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className="block text-white bg-blue-600 p-2 rounded-md hover:scale-105 hover:bg-blue-800 duration-300 cursor-pointer"
					onClick={() => {
						navigate("/cart");
					}}>
					<p className="max-md:hidden text-sm">
						<i className="fa fa-shopping-cart text-lg"></i> Giỏ hàng
					</p>
				</div>
			</div>
		</header>
	);
}
