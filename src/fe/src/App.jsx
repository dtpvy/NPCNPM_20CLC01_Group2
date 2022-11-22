import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Support from "./components/Support";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="support" element={<Support />} />
			</Route>
		</Routes>
	);
};

export default App;
