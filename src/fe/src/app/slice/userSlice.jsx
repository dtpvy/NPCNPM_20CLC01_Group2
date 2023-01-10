import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "../../Services/cart";

const userInfo = {
	status: "SUCCESS",
	errors: null,
	data: {
		id: "4d94422a-5471-4828-a122-dcf2ad249e7a",
		fullname: "admin !",
		seller_name: "admin",
		email: "admin@gmail.com",
		image: "admin.png",
		phone: "0123456789",
		address: "TP HCM",
		created_at: "2022-12-09T19:16:07.322195Z",
		updated_at: "2022-12-13T03:29:10.300863Z",
	},
};

const serverData = {
	order: [
		{
			package: [
				{ id: "1", amount: 3, status: "resolving" },
				{ id: "2", amount: 4, status: "resolving" },
			],
		},
		{ package: [{ id: "2", amount: 2, status: "shipping" }] },
		{
			package: [
				{ id: "1", amount: 3, status: "resolving" },
				{ id: "2", amount: 4, status: "shipping" },
			],
		},
	],
	resolving: [
		{ id: "1", amount: 3 },
		{ id: "2", amount: 4 },
	],
	shipping: [{ id: "3", amount: 2 }],
	history: [{ id: "6", amount: 1 }],
	cart: [
		{ id: "5", amount: 1 },
		{ id: "6", amount: 2 },
	],
};

export const getUser = createAsyncThunk("user/getUser", async () => {
	const data = {
		...serverData,
		...userInfo.data,
	};

	return data;
});

export const updateUser = createAsyncThunk("user/updateUser", async (data) => {
	return data;
});

export const getCartRedux = createAsyncThunk("user/getCartRedux", async (data) => {
	const d = await getCart()
		.then((res) => res.data)
		.catch((err) => {
			console.log(err);
			return [];
		});
	console.log(d);
	return d;
});

export const addProductToCart = createAsyncThunk("user/addProductToCart", async (data) => {
	return data;
});

export const updateCart = createAsyncThunk("user/updateCart", async (data) => {
	return data;
});

export const createOrder = createAsyncThunk("user/createOrder", async (data) => {
	return data;
});

const initialState = {
	data: {},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.fulfilled, (state, action) => {
				state.data = { ...action.payload };
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.data = { ...action.payload };
			})
			.addCase(addProductToCart.fulfilled, (state, action) => {
				state.data.cart = [action.payload, ...state.data.cart];
			})
			.addCase(updateCart.fulfilled, (state, action) => {
				state.data.cart = [...action.payload];
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				console.log("creating order");
				state.data.order = [...state.data.order, action.payload];
				state.data.cart = [];
			})
			.addCase(getCartRedux.fulfilled, (state, action) => {
				state.data.cart = [...action.payload];
			});
	},
});

export const getUserQuery = (state) => state.user.data;

export default userSlice.reducer;
