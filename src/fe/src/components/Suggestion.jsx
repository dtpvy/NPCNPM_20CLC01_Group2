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
  ];
  let Suggestions = suggestions.map((thing) => {
    return <SuggestionBox product={thing.name} price={thing.price} />;
  });
  return (
    <div className="catagory-container mx-1 my-5 bg-white ">
      <h3 className="mx-5 py-3">Gợi ý hôm nay</h3>
      <div className="d-flex flex-wrap">{Suggestions}</div>
    </div>
  );
}
