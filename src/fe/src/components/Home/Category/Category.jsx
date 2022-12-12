import React from "react";
import CategoryBox from "./CategoryBox.jsx";
export default function Category(props) {
  let categories = [
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
  let Categories = categories.map((thing) => {
    return <CategoryBox product={thing.name} />;
  });
  return (
    <div className="category-container mx-3 mx-1 my-5 bg-white ">
      <h3 className="text-3xl font-semibold ml-5 mb-3">Danh mục nổi bật</h3>
      <div className="flex flex-wrap pb-1.5 pr-1.5">{Categories}</div>
    </div>
  );
}
