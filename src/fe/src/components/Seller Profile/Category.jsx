import React from "react";

export default function Category() {
  let categories = ["Giày thể thao", "Giày sneakers"];
  let Categories = categories.map((thing) => {
    return <p className="pb-3">{thing}</p>;
  });
  return (
    <div className="w-1/4 p-3 inline-block bg-white text-lg">
      <p className="text-2xl font-bold py-2">Danh mục</p>
      <p className="mt-2 py-3">Sản phẩm</p>
      {Categories}
    </div>
  );
}
