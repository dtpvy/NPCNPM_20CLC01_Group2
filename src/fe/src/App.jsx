import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/index.jsx";
import SellerProfile from "./components/Seller Profile/index.jsx";
import Layout from "./components/Layout";
import Order from "./pages/order";
import Cart from "./pages/CartDetail";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile/Profile.jsx";
import Bought from "./Components/Profile/bought.jsx";
import EditProfile from "./Components/Profile/editProfile.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="bought" element={<Bought />} />
        <Route path="profile" element={<Profile />} />
        <Route path="editprofile" element={<EditProfile />} />
        <Route path="home" element={<Home />} />
        <Route path="seller-profile" element={<SellerProfile />} />
        <Route path="support" element={<Support />} />
        <Route path="detail/:id" element={<ProductDetail />} />
        <Route path="order" element={<Order />} />
        <Route path="cart-detail" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
