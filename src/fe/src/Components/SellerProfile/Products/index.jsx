import React, { useState, useEffect } from "react";
import ProductBox from "../../Home/Suggestion/ProductBox";
import { getAllProduct } from "../../../Services/product";
import { useSearchParams } from "react-router-dom";
import { getStoreInfo } from "../../../Services/store";
// import { getCategory } from "../../../Services/category";
import { useParams } from "react-router-dom";

export default function Products() {
	const products = getAllProduct();

	const { id } = useParams();
	const [data, setData] = useState([]);

	useEffect(() => {
		getStoreInfo(id)
			.then((res) => {
				console.log(res);
				const prods = [];
				res.data.store.map((item) => {
					item.products.map((product) => prods.push(product));
				});
				setData(prods);
			})
			.catch((err) => console.log(err));
	}, []);

	const [filterParams, setFilterParams] = useSearchParams();
	const searchTerm = filterParams.get("filter") || "";
	const handleFilter = (event) => {
		const item = event.target.value;
		if (item) {
			setFilterParams({ item });
		} else {
			setFilterParams();
		}
	};

	// let productFilter = [...products];
	// let filter = document.getElementByName("filter")[0].value;
	// switch (filter) {
	//   case "newest":
	//     break;
	//   case "oldest":
	//     break;
	//   case "cheapest":
	//     productFilter = products.slice().sort((a, b) => a - b);
	//     break;
	//   case "most-expensive":
	//     break;
	//   case "popular":
	//     break;
	//   default:
	//     productFilter = [...products];
	//     break;
	// }
	const Products = data.map((item, index) => {
		return <ProductBox key={index} title={item.name} price={item.price} id={item.id} />;
	});

	return (
		<div className="">
			<div className="flex items-center justify-between mt-2 mb-5">
				<div className="flex gap-2">
					<div className="text-lg">Lọc:</div>

					<select
						className="bg-white w-24 cursor-pointer flex items-center justify-center rounded-md hover:bg-slate-300"
						name="filter"
						id="filter">
						<option value="">Sắp xếp theo</option>
						<option value="newest">Mới nhất</option>
						<option value="oldest">Cũ nhất</option>
						<option value="">Giá</option>
						<option value="most-expensive">Đắt nhất</option>
						<option value="cheapest">Rẻ nhất</option>
						<option value="popular">Phổ Biến</option>
					</select>

					{/* <select
            className="bg-white w-24 cursor-pointer flex items-center justify-center rounded-md hover:bg-slate-300"
            name="filter-price"
            id="filter-price"
          >
            <option value="">Giá</option>
            <option value="most-expensive">Đắt nhất</option>
            <option value="cheapest">Rẻ nhất</option>
          </select>

          <div className="bg-white w-20 cursor-pointer flex items-center justify-center rounded-md hover:bg-slate-300">
            Phổ Biến
          </div> */}
				</div>
				{/* <div className="flex items-center">
          <div className="h-8 flex items-center">
            <span>1</span>
            <span>/2</span>
          </div>
          <div className="h-8 flex items-center">
            <i className="fa fa-toggle-left	text-xl mx-1 pl-3"></i>
          </div>
          <div className="h-8 flex items-center">
            <i className="fa fa-toggle-right text-xl mx-1"></i>
          </div>
        </div> */}
			</div>
			<div className="grid grid-cols-5 gap-3">{Products}</div>
		</div>
	);
}
