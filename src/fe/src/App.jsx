import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import SellerProfile from "./Components/SellerProfile";
import Layout from "./Components/Layout";
import Support from "./Components/Support";
import Order from "./Pages/Order";
import Cart from "./Pages/CartDetail";
import ProductDetail from "./Components/ProductDetail";
import Login from "./Components/Login";
import Register from "./Components/Register";

import Profile from "./Components/Profile/Profile";
import Bought from "./Components/Profile/Bought";
import EditProfile from "./Components/Profile/EditProfile";
import { useEffect } from "react";
// import { loginAPI } from "./Services/account.js";
import Payment from "./Components/Payment";

const App = () => {
	// useEffect(() => {
	// 	loginAPI({ email: "admin@gmail.com", password: "admin1" }).then((res) => {
	// 		console.log(res);
	// 	});
	// }, []);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} /> {/*fixed*/}
				<Route path="profile">
					<Route index element={<Profile />} /> {/*fixed*/}
					<Route path="edit" element={<EditProfile />} /> {/*fixed*/}
					<Route path="seller-profile" element={<SellerProfile />} />
				</Route>
				<Route path="detail/:id" element={<ProductDetail />} />
				<Route path="bought" element={<Bought />} />
				<Route path="order" element={<Order />} />
				<Route path="cart-detail" element={<Cart />} />
				<Route path="payment" element={<Payment />} />
				<Route path="support" element={<Support />} />
			</Route>
		</Routes>
	);
};

export default App;
