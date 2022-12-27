import request from "./request";

const data = [
	{ id: 1, title: "Quần Jean Khá Bảnh", price: 10000000, sold: 51 },
	{ id: 2, title: "Nút kim cương NTN", price: 10000000, sold: 1 },
	{ id: 3, title: "Bồn tắm của chị Thơ Nguyễn", price: 10000000, sold: 69 },
	{ id: 4, title: "Iphone 14 Pro Max", price: 10000000, sold: 69 },
	{ id: 5, title: "Macbook Pro", price: 10000000, sold: 69 },
	{ id: 6, title: "10000 PI", price: 10000000, sold: 69 },
	{ id: 7, title: "Mèo anh lông ngắn", price: 10000000, sold: 69 },
	{ id: 8, title: "Bánh mì không của Đạt G", price: 10000000, sold: 69 },
	{ id: 9, title: "Jack 05", price: 10000000, sold: 69 },
];

export const getProductById = (id) => {
	return data.find((item) => {
		return item.id.toString() === id.toString();
	});
};

export const getAllProduct = () => {
	return data;
};
