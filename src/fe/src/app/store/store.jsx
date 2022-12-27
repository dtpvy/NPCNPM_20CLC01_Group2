import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "../slice/collectionsSlice";
import userReducer from "../slice/userSlice";

const store = configureStore({
	reducer: {
		user: userReducer,
		collections: collectionsReducer,
	},
});

export default store;
