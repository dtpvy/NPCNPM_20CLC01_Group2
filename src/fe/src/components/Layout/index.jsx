import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default Layout;
