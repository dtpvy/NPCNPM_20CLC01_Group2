import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/index.jsx";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
