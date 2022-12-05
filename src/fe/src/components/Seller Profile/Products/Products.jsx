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
        widthSmall="w-2/12"
        widthLarge="w-2/12"
        product={thing.name}
        price={thing.price}
      />
    );
  });
  return (
    <div className="category-container w-3/4 inline-block ">
      <div className="flex items-center	justify-between">
        <div>
          <p className="inline-block text-xl mx-3 px-3 h-8 w-23 text-center">
            Sắp xếp theo
          </p>
          <p className="inline-block text-xl m-3 bg-white h-8 w-22 px-3 text-center">
            Mới nhất
          </p>
          <p className="inline-block text-xl m-3 bg-white h-8 w-20 text-center">
            Giá
          </p>
          <p className="inline-block text-xl m-3 bg-white h-8 w-22 px-3 text-center">
            Phổ Biến
          </p>
        </div>
        <div className="px-5">
          <span>1</span>
          <span>/2</span>
          <a className="">
            <i className="fa fa-toggle-left	text-xl mx-1 pl-3"></i>
          </a>
          <a className="">
            <i className="fa fa-toggle-right text-xl mx-1"></i>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap bg-zinc-100 pb-1.5 pr-1.5 pl-1">
        {Products}
      </div>
    </div>
  );
}
