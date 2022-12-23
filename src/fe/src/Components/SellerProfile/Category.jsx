import React from "react";

export default function Category() {
  let categories = ["Giày thể thao", "Giày sneakers"];
  let Categories = categories.map((thing) => {
    return <p className="pb-3 font-medium">{thing}</p>;
  });
  return (
    <div className="w-3/12 inline-block bg-white text-lg rounded pl-7 pt-3">
      <p className="text-2xl font-bold border-b-2 border-stone-500	pb-3 mr-4">
        Danh mục
      </p>
      <p className="mt-2 py-3 font-medium">Sản phẩm</p>
      {Categories}
    </div>
  );
}
