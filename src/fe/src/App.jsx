import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Header from "./components/Header.jsx";
import Catagory from "./components/Catagory.jsx";
import "./style.css";
import Suggestion from "./components/Suggestion.jsx";
=======

import Layout from "./components/Layout";

>>>>>>> 2df5cddf0783bf1a08037cbfa7287bec8502134c
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
