import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const data = [
	{ id: 1, name: "Quần áo 1", products: [] },
	{ id: 2, name: "Điện thoại 1", products: [] },
	{ id: 3, name: "Thiết bị điện tử 1", products: [] },
	{ id: 4, name: "iphone 1", products: [] },
	{ id: 5, name: "mũ 1", products: [] },
	{ id: 6, name: "Sách 1", products: [] },
	{ id: 7, name: "áo 1", products: [] },
	{ id: 8, name: "Thiết bị điện tử 1", products: [] },
];

export const getCollections = createAsyncThunk("collections/getCollections", async () => {
	return data;
});

const initialState = {
	data: [],
};

const collectionsSlice = createSlice({
	name: "collections",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCollections.fulfilled, (state, action) => {
			state.data = [...action.payload];
		});
	},
});

// selector
export const getAllCollectionsQuery = (state) => state.collections.data;

export default collectionsSlice.reducer;
