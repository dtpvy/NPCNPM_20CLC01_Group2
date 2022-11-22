import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<header className="w-full h-16 bg-orange-600">Header</header>
			<Outlet />
		</div>
	);
};

export default Layout;
