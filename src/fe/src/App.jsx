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
import Payment from "./Components/Payment";

import { useEffect } from "react";
// import { loginAPI } from "./Services/account.js";

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
					<Route path="seller-profile" element={<SellerProfile />} /> {/*fixed*/}
				</Route>
				<Route path="detail/:id" element={<ProductDetail />} /> {/*fixed*/}
				<Route path="bought" element={<Bought />} /> {/*fixed*/}
				<Route path="order" element={<Order />} /> {/*fixed*/}
				<Route path="cart" element={<Cart />} /> {/*fixed*/}
				<Route path="payment" element={<Payment />} /> {/*fixed*/}
				<Route path="support" element={<Support />} /> {/*fixed*/}
			</Route>
		</Routes>
	);
};

export default App;
