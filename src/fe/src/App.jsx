import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/index.jsx";
import SellerProfile from "./components/Seller Profile/index.jsx";
import Layout from "./components/Layout";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="seller-profile" element={<SellerProfile />} />
        <Route path="support" element={<Support />} />
				<Route path="detail/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
