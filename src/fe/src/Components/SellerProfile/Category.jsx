import React from "react";
// import { getCategory } from "../../../Services/category";

export default function Category() {
  let categories = ["Giày thể thao", "Giày sneakers"];
  let Categories = categories.map((thing) => {
    return <p className="font-medium">{thing}</p>;
  });
  return (
    <div className="bg-white text-lg rounded-md px-7 py-5 flex flex-col">
      <p className="text-2xl font-bold">Danh mục</p>
      <div className="w-full h-0.5 bg-slate-300 mt-3 mb-1"></div>
      <p className="font-medium">Sản phẩm</p>
      <div className="flex gap-2 pl-6">
        <div className="w-0.5 h-full bg-slate-300"></div>
        <div className="flex flex-col">{Categories}</div>
      </div>
    </div>
  );
}
