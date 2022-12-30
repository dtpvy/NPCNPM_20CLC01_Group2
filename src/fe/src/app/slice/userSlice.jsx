import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const serverData = {
	username: "caiminhchanh",
	fullname: "Cái Minh Chánh",
	email: "cmchanh@yahoo.com",
	phone: "0123456789",
	gender: "Nam",
	dateOfBirth: "2002-03-28",
	dateCreated: "2022-12-1",
	cart: [
		{ id: 2, amount: 1 },
		{ id: 3, amount: 2 },
	],
	resolving: [
		{ id: 1, amount: 3 },
		{ id: 2, amount: 4 },
	],
	shipping: [{ id: 3, amount: 2 }],
	history: [{ id: 6, amount: 1 }],
	cancelled: [],
};

export const getUser = createAsyncThunk("user/getUser", async () => {
	return serverData;
});

export const updateUser = createAsyncThunk("user/updateUser", async (data) => {
	// update backend data;
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
			});
	},
});

export const getUserQuery = (state) => state.user.data;

export default userSlice.reducer;

