import React from "react";
import avatar from "./avatar.png";
export default function Header() {
  let category = [
    "trái cây",
    "thịt trứng",
    "rau củ quả",
    "sữa, bơ, phô mai",
    "hải sản",
    "gạo, mì ăn liền",
  ];
  let categoryElements = category.map((thing) => {
    return (
      <a href="#" className="px-2 pt-1">
        {thing}
      </a>
    );
  });
  return (
    <header className="bg-white ">
      <nav className="bg-sky-600 flex items-center">
        <div className="inline-block text-white p-3 m-0">
          <span>Webanhang</span>
          <p>Logo</p>
        </div>
        <div className="inline-block w-5/12 md:w-7/12 ml-20 mr-20">
          <input type="text" className="h-7 mt-1 w-3/5 md:w-9/12" />
          <div className="inline-block border-1 h-8">
            <a href="#" className="text-white bg-blue-800 p-1">
              <i className="fa fa-search	inline"></i>
              <span>Tìm kiếm</span>
            </a>
          </div>
          <div className="max-md:hidden text-white" id="catagory">
            {categoryElements}
          </div>
        </div>
        <img src={avatar} alt="" className="h-10 block " />

        <a href="#">
          <a id="account" className="block text-white max-md:hidden">
            <span>Tài khoản</span>
            <p className="">User name</p>
          </a>
        </a>

        <a href="#" id="account" className="block ml-5 text-white">
          <i class="fa fa-shopping-cart "></i>
          <p className="max-md:hidden">Giỏ hàng</p>
        </a>
      </nav>
    </header>
  );
}
