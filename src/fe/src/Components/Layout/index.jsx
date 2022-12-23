import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
	return (
		<div>
			<header>
				<Header />
			</header>
			<div className="">
				<Outlet />
			</div>
			<footer></footer>
		</div>
	);
};

export default Layout;
