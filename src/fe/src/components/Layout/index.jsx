import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="h-screen w-screen">
			<header className="h-1/6 bg-orange-600">Header</header>
			<div className="bg-slate-200">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
