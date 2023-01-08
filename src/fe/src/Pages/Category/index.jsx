import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCollections } from "../../app/slice/collectionsSlice";
import { getAllProduct } from "../../Services/product";
import ProductBox from "../../Components/Home/Suggestion/ProductBox";

export default function Category() {
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
      <h3 className="text-3xl font-semibold mx-3">Danh mục sản phẩm </h3>
      <div className="p-5 grid grid-cols-5 gap-5 bg-white">{searchResults}</div>
    </div>
  );
}
