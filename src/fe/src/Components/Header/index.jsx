import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../../Services/category";
import avatar from "./avatar.png";
import "./header.css";
import { useSearchParams } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategory().then((res) => {
      setCategories(res);
    });
  }, []);
  const navigate = useNavigate();

  const categoryElements = categories.map((thing, index) => {
    return (
      <div
        key={index}
        className="text-sm cursor-pointer hover:underline hover:scale-105 hover:underline-offset-4 text-center"
        onClick={() => {
          navigate(`/category`);
        }}
      >
        {thing.title}
      </div>
    );
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("item") || "";
  const handleSearch = (event) => {
    const item = event.target.value;
    if (item) {
      setSearchParams({ item });
    } else {
      setSearchParams();
    }
  };

  return (
    <header className="bg-sky-600 flex items-center justify-center h-24">
      <div
        className="text-white p-3 bg-red-300 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <span>Webanhang</span>
        <p>Logo</p>
      </div>
      <div className="w-5/12 md:w-7/12 mx-20 flex flex-col justify-start">
        <div className="flex items-center h-9 mb-1">
          <input
            type="text"
            value={searchTerm}
            className="h-full w-3/5 md:w-9/12 pl-3"
          />
          <div
            className="h-full bg-blue-800 hover:bg-blue-700 text-white px-3 cursor-pointer flex items-center justify-center"
            onClick={() => {
              navigate(`/search`);
              handleSearch();
            }}
          >
            <i className="fa fa-search inline"></i>
            <span> Tìm kiếm</span>
          </div>
        </div>
        <nav>
          <div className="max-md:hidden flex gap-3 text-white" id="catagory">
            {categoryElements}
          </div>
        </nav>
      </div>
      <div className="flex gap-4">
        <div
          className="flex gap-2  cursor-pointer"
          onClick={() => {
            navigate("/profile");
          }}
        >
          <div className="bg-white flex justify-center items-center rounded-full">
            <img src={avatar} alt="" className="h-10 block" />
          </div>
          <div className="flex gap-3">
            <div class="dropdown h-12">
              <button class="dropbtn">
                Dropdown
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  Tài khoản
                </a>
                <a className="block" href="/login">
                  Đăng xuất
                </a>
              </div>
              <p className="">User name</p>
            </div>

            {/* <a id="account" className="block text-white text-sm max-md:hidden">
              <span>Tài khoản</span>
              <p className="">User name</p>
            </a> */}
          </div>
        </div>

        <div
          className="block text-white bg-blue-600 p-2 rounded-md hover:scale-105 hover:bg-blue-800 duration-300 cursor-pointer"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <p className="max-md:hidden text-sm">
            <i className="fa fa-shopping-cart text-lg"></i> Giỏ hàng
          </p>
        </div>
      </div>
    </header>
  );
}
