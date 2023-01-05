import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCollections } from "../../app/slice/collectionsSlice";
import { getAllProduct } from "../../Services/product";
import ProductBox from "../../Components/Home/Suggestion/ProductBox";
export default function SearchPage() {
  const searchProducts = getAllProduct();
  const dispatch = useDispatch();
  // const  searchResults = searchProducts.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase())).map((item,i)=>{
  //   return (
  //     <ProductBox
  //       key={index}
  //       id={thing.id}
  //       title={thing.title}
  //       price={thing.price}
  //     />
  //   );
  // })
  const searchResults = searchProducts.map((thing, index) => {
    return (
      <ProductBox
        key={index}
        id={thing.id}
        title={thing.title}
        price={thing.price}
      />
    );
  });
  return (
    <div className="flex flex-col gap-14">
      <div className="flex items-center justify-between mx-3">
        <div>
          <h3 className="text-lg font-semibold mx-3">
            Hiển thị {searchProducts.length} kết quả tìm kiếm
          </h3>
        </div>
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
      </div>
      <div className="p-5 grid grid-cols-5 gap-5 bg-white">{searchResults}</div>
    </div>
  );
}
