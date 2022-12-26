import { configureStore } from "@reduxjs/toolkit";
import collectionsSlice from "../slice/collectionsSlice";
import productsSlice from "../slice/productsSlice";

const store = configureStore({
	reducer: {
		products: productsSlice,
		collections: collectionsSlice,
	},
});

export default store;
