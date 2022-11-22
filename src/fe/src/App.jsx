import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Catagory from "./components/Catagory.jsx";
import "./style.css";
import Suggestion from "./components/Suggestion.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
