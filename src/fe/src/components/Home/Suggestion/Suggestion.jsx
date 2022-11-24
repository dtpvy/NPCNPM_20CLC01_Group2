import React from "react";
import SuggestionBox from "./SuggestionBox.jsx";
export default function Suggestion(props) {
  let suggestions = [
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
  let Suggestions = suggestions.map((thing) => {
    return <SuggestionBox product={thing.name} price={thing.price} />;
  });
  return (
    <div className="category-container mx-3 mx-1 my-5 bg-white ">
      <h3 className="text-3xl font-semibold ml-5 mb-3">Gợi ý hôm nay</h3>
      <div className="flex flex-wrap bg-zinc-200 pb-1.5 pr-1.5">
        {Suggestions}
      </div>
    </div>
  );
}
