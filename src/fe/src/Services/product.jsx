import request from "./request";

const data = [
	{
		id: "03caf77d-5ff0-42c8-8da4-40c538b093f5",
		name: "Tâm linh ít thôi",
		image: "",
		quantity: 2,
		description:
			"Một cuốn sách tâm linh giúp bạn giải quyết những vấn đề trong cuộc sống, công việc, tình cảm… Nếu bạn đang phân vân trước những lựa chọn, nếu bạn đang thiếu quyết đoán, nếu bạn không biết tiếp theo nên làm gì: hãy đặt một câu hỏi.",
		price: 10000,
		old_price: 20000,
		creator_id: "4d94422a-5471-4828-a122-dcf2ad249e7a",
		store: {
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
		category_id: "e8e05e61-9244-4057-b5c9-6c9834364979",
		category: {
			id: "e8e05e61-9244-4057-b5c9-6c9834364979",
			name: "book",
			title: "Sách cũ",
			image: "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
			status: "inactive",
			created_at: "2022-12-13T22:28:27.230969Z",
			updated_at: "2022-12-13T22:28:27.230969Z",
		},
		created_at: "2022-12-20T10:28:54.601661Z",
		updated_at: "2022-12-20T10:45:10.466921Z",
	},
	{
		id: "1",
		name: "Quẩn Jean của Khá Bảnh",
		price: 10000000,
		sold: 1,
		category_id: "1",
	},
	{ id: "2", name: "Nút kim cương NTN", price: 10000000, sold: 1, category_id: "1" },
	{ id: "3", name: "Bồn tắm của chị Thơ Nguyễn", price: 10000000, sold: 69, category_id: "1" },
	{ id: "4", name: "Iphone 14 Pro Max", price: 10000000, sold: 69, category_id: "1" },
	{ id: "5", name: "Macbook Pro", price: 10000000, sold: 69, category_id: "2" },
	{ id: "6", name: "10000 PI", price: 10000000, sold: 69, category_id: "3" },
	{ id: "7", name: "Mèo anh lông ngắn", price: 10000000, sold: 69, category_id: "2" },
	{ id: "8", name: "Bánh mì không của Đạt G", price: 10000000, sold: 69, category_id: "1" },
	{ id: "9", name: "Jack 05", price: 10000000, sold: 69, category_id: "3" },
];

export const getProductSearch = (category_id) => {
	return new Promise((resolve, reject) => {
		request({
			method: "get",
			path: "product/search",
			params: { sort: "asc", st: "name", page: 0, limit: 1000, category: category_id },
		})
			.then((res) => {
				console.log("success");
				resolve(res);
			})
			.catch(() => {
				console.log("error");
				resolve({ status: "DEFAULT", data: [] });
			});
	});
};

export const getProductById = (id) => {
	return new Promise((resolve, reject) => {
		request({
			method: "get",
			path: `product/detail/${id}`,
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const getAllProduct = () => {
	return data;
};
