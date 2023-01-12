import React, { useState, useEffect, useMemo } from "react";
import "./header.css";
import avatar from "./avatar.png";
import loginIMG from "../../Assets/login.jpg";

import { useNavigate } from "react-router-dom";
import { getCategory } from "../../Services/category";
import { getProductSearch } from "../../Services/product";
import { getUserInfo } from "../../Services/account";

export default function Header() {
	const navigate = useNavigate();
	const [user, setUser] = useState({ image: avatar, fullname: "" });
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	const [searchField, setSearchField] = useState("");
	const [productsFound, setProductsFound] = useState([]);
	const [catsFound, setCatsFound] = useState([]);

	useEffect(() => {
		getUserInfo()
			.then((res) => {
				setUser(res.data);
			})
			.catch((err) => console.log(err));

		getCategory()
			.then((res) => {
				let prodData = [];
				setCategories(res.data);
				res.data.map((item) => {
					getProductSearch(item.id)
						.then((res) => {
							// console.log(res);
							setProducts((prev) => [...prev, ...res.data]);
						})
						.catch((err) => console.log(err));
				});
			})
			.catch((err) => console.log(err));
	}, []);

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
		.filter((item) => item.title.toLowerCase().includes(searchField.toLowerCase()))
		.map((item, i) => {
			if (searchField != "") {
				return (
					<li
						key={`${i} - cat`}
						className="bg-amber-100	px-3 py-2 hover:bg-amber-300 cursor-pointer"
						onClick={() => {
							navigate(`/category`); //sửa thêm id
						}}>
						{item.title} - danh mục
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
						key={`${i} - prod`}
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
				className="text-white bg-red-300 cursor-pointer rounded-md flex flex-col items-center font-bold hover:scale-105 duration-300 w-16 overflow-hidden"
				onClick={() => {
					navigate("/");
				}}>
				{/* <span>Webanhang</span>
				<p>Logo</p> */}
				<img className="object-contain w-full h-full" src={loginIMG} alt="" />
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
					<div className="bg-white w-14 aspect-square flex justify-center items-center rounded-full overflow-hidden">
						<img src={user.image} alt="" className="h-10 block" />
					</div>
					<div className="flex flex-col">
						<p className="font-bold">{user.fullname}</p>
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
