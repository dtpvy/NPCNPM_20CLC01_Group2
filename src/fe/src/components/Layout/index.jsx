import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<header className="h-20 bg-orange-600">Header</header>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
