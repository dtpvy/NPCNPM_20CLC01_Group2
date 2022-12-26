import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const data = [
	{ id: 1, name: "Quần Jean Khá Bảnh", price: 10000000, sold: 51 },
	{ id: 2, name: "Nút kim cương NTN", price: 10000000, sold: 1 },
	{ id: 3, name: "Bồn tắm của chị Thơ Nguyễn", price: 10000000, sold: 69 },
	{ id: 4, name: "Iphone 14 Pro Max", price: 10000000, sold: 69 },
	{ id: 5, name: "Macbook Pro", price: 10000000, sold: 69 },
	{ id: 6, name: "10000 PI", price: 10000000, sold: 69 },
	{ id: 7, name: "Mèo anh lông ngắn", price: 10000000, sold: 69 },
	{ id: 8, name: "Bánh mì không của Đạt G", price: 10000000, sold: 69 },
	{ id: 9, name: "Jack 05", price: 10000000, sold: 69 },
];

export const getProducts = createAsyncThunk("products/getProducts", async () => {
	return data;
});



const initialState = {
	data: [],
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.data = [...action.payload];
		});
	},
});

// query
export const getProductsSuggestionQuery = (state) => {
	return state.products.data;
};

export default productsSlice.reducer;
