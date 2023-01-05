import React from "react";
import ProductBox from "../../Home/Suggestion/ProductBox";
import { getAllProduct } from "../../../Services/product";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const products = getAllProduct();

  const [filterParams, setFilterParams] = useSearchParams();
  const searchTerm = filterParams.get("item") || "";
  const handleFilter = (event) => {
    const item = event.target.value;
    if (item) {
      setFilterParams({ item });
    } else {
      setFilterParams();
    }
  };

  const Products = products
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((item, index) => {
      return <ProductBox key={index} title={item.title} price={item.price} />;
    });

  return (
    <div className="">
      <div className="flex items-center justify-between mt-2 mb-5">
        <div className="flex gap-2">
          <div className="text-lg">Sắp xếp theo:</div>

          <select
            className="bg-white w-24 cursor-pointer flex items-center justify-center rounded-md hover:bg-slate-300"
            name="filter-time"
            id="filter-time"
          >
            <option value="newest">Mới nhất</option>
            <option value="oldest">Cũ nhất</option>
          </select>

          <select
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
          </div>
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
