import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
	return (
		<>
			<div className="bg-slate-200 min-h-screen">
				<Header />
				<div className="pt-10 px-8 pb-20">
					<Outlet />
				</div>
			</div>
			<footer className="h-20 bg-blue-500"></footer>
		</>
	);
};

export default Layout;
