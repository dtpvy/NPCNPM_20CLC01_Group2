import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Order from "./pages/order";
import Cart from "./pages/CartDetail";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route path="order" element={<Order />} />
        <Route path="cart-detail" element={<Cart />} />
      </Route>
     
    </Routes>
    
  );
};

export default App;
