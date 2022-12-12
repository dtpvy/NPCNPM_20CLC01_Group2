import React from "react";
import SellerInfor from "./Seller Infor/SellerInfor.jsx";
import Category from "./Category.jsx";
// import Suggestion from "./Suggestion/Suggestion.jsx";
import Products from "./Products/Products";
export default function SellerProfile() {
  return (
    <div className="bg-slate-200">
      <SellerInfor />
      <div className="flex 	">
        <Category />
        <Products />
      </div>
    </div>
  );
}
