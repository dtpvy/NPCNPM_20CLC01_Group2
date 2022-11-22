import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<header></header>
			<Outlet />
			<footer></footer>
		</div>
	);
};

export default Layout;
