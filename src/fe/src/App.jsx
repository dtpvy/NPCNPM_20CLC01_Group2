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
import Category from "./Pages/Category";
// import { loginAPI } from "./Services/account.js";

const App = () => {
  return (
    <Routes>
      {/*semi-fixed*/}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/*semi-fixed*/}
        <Route path="profile">
          <Route index element={<Profile />} /> {/*fixed*/}
          <Route path="edit" element={<EditProfile />} /> {/*fixed*/}
          <Route path="seller-profile" element={<SellerProfile />} />{" "}
          {/*semi-fixed*/}
        </Route>
        <Route path="category" element={<Category />} /> {/*???*/}
        <Route path="detail/:id" element={<ProductDetail />} /> {/*fixed*/}
        <Route path="bought" element={<Bought />} /> {/*???*/}
        <Route path="order" element={<Order />} />
        <Route path="cart" element={<Cart />} /> {/*semi-fixed*/}
        <Route path="payment" element={<Payment />} /> {/*semi-fixed*/}
        <Route path="support" element={<Support />} /> {/*semi-fixed*/}
      </Route>
      <Route path="login" element={<Login />} /> {/*semi-fixed*/}
      <Route path="register" element={<Register />} /> {/*semi-fixed*/}
    </Routes>
  );
};

export default App;
