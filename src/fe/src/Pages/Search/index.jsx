import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCollections } from "../../app/slice/collectionsSlice";
import { getAllProduct } from "../../Services/product";
import ProductBox from "../../Components/Home/Suggestion/ProductBox";
export default function SearchPage() {
  const searchProducts = getAllProduct();

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
      <h3 className="text-lg font-semibold mx-3">
        Hiển thị {searchProducts.length} kết quả tìm kiếm
      </h3>
      <div className="flex items-center justify-between mx-3 mb-3">
        <div className="flex gap-4">
          <div className="text-lg">Sắp xếp theo:</div>
          <div className="bg-white w-20 cursor-pointer flex items-center justify-center rounded-md hover:bg-slate-300">
            Mới nhất
          </div>
          <div className="bg-white w-20 cursor-pointer flex items-center justify-center rounded-md hover:bg-slate-300">
            Giá
          </div>
          <div className="bg-white w-20 cursor-pointer flex items-center justify-center rounded-md hover:bg-slate-300">
            Đánh giá
          </div>
        </div>
      </div>
      <div className="p-5 grid grid-cols-5 gap-5 bg-white">{searchResults}</div>
    </div>
  );
}
