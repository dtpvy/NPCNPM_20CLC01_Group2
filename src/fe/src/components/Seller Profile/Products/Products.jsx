import React from "react";
import ProductBox from "../../Home/Suggestion/ProductBox.jsx";
export default function Products() {
  let products = [
    { name: "Quần áo 1", price: "200.0" },
    { name: "Điện thoại 1", price: "2000.0" },
    { name: "Thiết bị điện tử 1", price: "200.0" },
    { name: "iphone 1", price: "200.0" },
    { name: "mũ 1", price: "200.0" },
    { name: "Sách 1", price: "200.0" },
    { name: "áo 1", price: "200.0" },
    { name: "Thiết bị điện tử 1", price: "200.0" },
    { name: "iphone 1", price: "200.0" },
    { name: "mũ 1", price: "200.0" },
    { name: "Sách 1", price: "200.0" },
    { name: "áo 1", price: "200.0" },
  ];
  let Products = products.map((thing) => {
    return (
      <ProductBox
        widthSmall="w-3/12"
        widthLarge="w-4/12"
        product={thing.name}
        price={thing.price}
      />
    );
  });
  return (
    <div className="category-container w-3/4  inline-block ">
      <div>
        <p className="inline-block text-xl m-3 bg-white h-8 w-20 text-center">
          Mục 1
        </p>
        <p className="inline-block text-xl m-3 bg-white h-8 w-20 text-center">
          Mục 2
        </p>
        <p className="inline-block text-xl m-3 bg-white h-8 w-20 text-center">
          Mục 3
        </p>
        <p className="inline-block text-xl m-3 bg-white h-8 w-20 text-center">
          Mục 4
        </p>
      </div>
      <div className="flex flex-wrap bg-zinc-200 pb-1.5 pr-1.5">{Products}</div>
    </div>
  );
}
