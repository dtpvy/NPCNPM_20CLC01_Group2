import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../../Services/category";
import avatar from "./avatar.png";
import "./header.css";
import { useSearchParams } from "react-router-dom";
import { getAllProduct } from "../../Services/product";

export default function Header() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategory().then((res) => {
      setCategories(res);
    });
  }, []);

  const [products, setProducts] = useState(getAllProduct());

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   getAllProduct().then((res) => {
  //     setProducts(res);
  //   });
  // }, []);

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
      setSearchParams({});
    }
  };

  const found1 = categories
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((item, i) => {
      if (searchTerm != "") {
        return (
          <li
            key={i}
            className="bg-amber-100	pl-4 border-b border-neutral-600	"
            onClick={() => {
              navigate(`/category`); //sửa thêm id
            }}
          >
            {item.title} - danh mục
          </li>
        );
      }
    });

  const found2 = products
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((item, i) => {
      if (searchTerm != "") {
        return (
          <li
            key={i * 5}
            className="bg-cyan-100	pl-4 border-b border-neutral-600	"
            onClick={() => {
              navigate(`/detail/${item.id}`);
            }}
          >
            {item.title} - sản phẩm
          </li>
        );
      }
    });
  let found;
  if (searchTerm != "") {
    found = found1.concat(found2);
  }
  // const found = found1.concat(found2);
  return (
    <header className="bg-sky-600 flex items-center justify-center h-24">
      <div
        className="text-white p-3 bg-red-300 cursor-pointer"
        onClick={() => {
          navigate("/");
          let searchBar = document.querySelector("#search-bar");
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
            className="h-full w-6/12 md:w-9/12 pl-3"
            onChange={handleSearch}
            id="search-bar"
          />

          <div
            className="h-full bg-blue-800 hover:bg-blue-700 text-white px-3 cursor-pointer flex items-center justify-center"
            onClick={handleSearch}
          >
            <i className="fa fa-search inline"></i>
            <span> Tìm kiếm</span>
          </div>
        </div>
        <ul className="absolute top-14 left-1/12 bg-white w-5/12">{found}</ul>
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
            <div className="dropdown h-12">
              <button className="dropbtn">
                Dropdown
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
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
