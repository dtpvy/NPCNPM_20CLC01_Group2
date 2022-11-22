import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Order from "./pages/order";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/order" element={<Order />}></Route>
    </Routes>
  );
};

export default App;
