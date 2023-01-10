import request from "./request";

const serverData = {
	status: "SUCCESS",
	errors: null,
	data: {
		user: {
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
		store: [
			{
				id: "857b5e9e-1c0d-4032-9730-49e6f6fd9bd9",
				name: "Tất cả",
				image: "",
				seller_id: "4d94422a-5471-4828-a122-dcf2ad249e7a",
				products: [
					{
						id: "6daa06e7-0764-477f-901c-42504ef790b5",
						name: "Vị thần quyết định 4",
						image: "",
						quantity: 2,
						category_id: "e8e05e61-9244-4057-b5c9-6c9834364979",
						creator_id: "4d94422a-5471-4828-a122-dcf2ad249e7a",
						description:
							"Một cuốn sách tâm linh giúp bạn giải quyết những vấn đề trong cuộc sống, công việc, tình cảm… Nếu bạn đang phân vân trước những lựa chọn, nếu bạn đang thiếu quyết đoán, nếu bạn không biết tiếp theo nên làm gì: hãy đặt một câu hỏi.",
						price: 10000,
						old_price: 20000,
						created_at: "2022-12-18T13:27:05.242442Z",
						updated_at: "2022-12-18T13:27:05.242442Z",
					},
					{
						id: "361e25e2-39c7-4e9d-b11c-3168bf1e148b",
						name: "Vị thần quyết định 3",
						image: "",
						quantity: 2,
						category_id: "e8e05e61-9244-4057-b5c9-6c9834364979",
						creator_id: "4d94422a-5471-4828-a122-dcf2ad249e7a",
						description:
							"Một cuốn sách tâm linh giúp bạn giải quyết những vấn đề trong cuộc sống, công việc, tình cảm… Nếu bạn đang phân vân trước những lựa chọn, nếu bạn đang thiếu quyết đoán, nếu bạn không biết tiếp theo nên làm gì: hãy đặt một câu hỏi.",
						price: 10000,
						old_price: 20000,
						created_at: "2022-12-18T13:27:01.847792Z",
						updated_at: "2022-12-18T13:27:01.847792Z",
					},
					{
						id: "c5757a6b-d6ff-4a04-9faa-f13610e88d53",
						name: "Vị thần quyết định 2",
						image: "",
						quantity: 2,
						category_id: "e8e05e61-9244-4057-b5c9-6c9834364979",
						creator_id: "4d94422a-5471-4828-a122-dcf2ad249e7a",
						description:
							"Một cuốn sách tâm linh giúp bạn giải quyết những vấn đề trong cuộc sống, công việc, tình cảm… Nếu bạn đang phân vân trước những lựa chọn, nếu bạn đang thiếu quyết đoán, nếu bạn không biết tiếp theo nên làm gì: hãy đặt một câu hỏi.",
						price: 10000,
						old_price: 20000,
						created_at: "2022-12-18T13:26:57.779091Z",
						updated_at: "2022-12-18T13:26:57.779091Z",
					},
					{
						id: "f7649f02-ca60-4873-92fa-e3cf654d0ae6",
						name: "Vị thần quyết định 1",
						image: "",
						quantity: 2,
						category_id: "e8e05e61-9244-4057-b5c9-6c9834364979",
						creator_id: "4d94422a-5471-4828-a122-dcf2ad249e7a",
						description:
							"Một cuốn sách tâm linh giúp bạn giải quyết những vấn đề trong cuộc sống, công việc, tình cảm… Nếu bạn đang phân vân trước những lựa chọn, nếu bạn đang thiếu quyết đoán, nếu bạn không biết tiếp theo nên làm gì: hãy đặt một câu hỏi.",
						price: 10000,
						old_price: 20000,
						created_at: "2022-12-18T13:26:53.244641Z",
						updated_at: "2022-12-18T13:26:53.244641Z",
					},
					{
						id: "07c737db-fd41-42b8-b2d5-48b8326c166e",
						name: "Vị thần quyết định",
						image: "",
						quantity: 2,
						category_id: "e8e05e61-9244-4057-b5c9-6c9834364979",
						creator_id: "4d94422a-5471-4828-a122-dcf2ad249e7a",
						description:
							"Một cuốn sách tâm linh giúp bạn giải quyết những vấn đề trong cuộc sống, công việc, tình cảm… Nếu bạn đang phân vân trước những lựa chọn, nếu bạn đang thiếu quyết đoán, nếu bạn không biết tiếp theo nên làm gì: hãy đặt một câu hỏi.",
						price: 10000,
						old_price: 20000,
						created_at: "2022-12-14T13:36:59.674594Z",
						updated_at: "2022-12-14T13:36:59.674594Z",
					},
				],
				created_at: "2022-12-11T14:34:01.59225Z",
				updated_at: "2022-12-11T14:34:01.59225Z",
			},
			{
				id: "d17bb3ac-920a-48e3-a0d2-e124d47379d8",
				name: "Sách tâm linh",
				image: "",
				seller_id: "4d94422a-5471-4828-a122-dcf2ad249e7a",
				products: null,
				created_at: "2022-12-12T19:10:30.967733Z",
				updated_at: "2022-12-12T19:10:30.967733Z",
			},
		],
	},
};

export const getStoreInfo = (id) => {
	return new Promise((resolve, reject) => {
		request({
			method: "get",
			path: `store/info/${id}`,
		})
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};
