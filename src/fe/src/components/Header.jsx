import React from "react";

export default function Header() {
  return (
    <header className="  bg-primary">
      <nav class="navbar navbar-expand-lg  bg-primary fixed-top ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Webanhang
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <form class="d-flex " role="search">
                  <input
                    class="search-input form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn rounded-pill btn-outline-dark"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>

              <li class="nav-item ">
                <a class="nav-link text-light" href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Sign Up
                </a>
              </li>
              <div className="d-flex">
                <a class="nav-link text-light" href="#">
                  Cart
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-3 pb-2 mt-5  ">
        <span className="ps-5 ms-5"></span>
        <a href="#" className="ps-5 pe-2 text-light text-decoration-none">
          Thịt, Rau củ
        </a>
        <a href="#" className="px-2 text-light text-decoration-none">
          Bách Hóa
        </a>
        <a href="#" className="px-2 text-light text-decoration-none">
          Nhà Cửa
        </a>
        <a href="#" className="px-2 text-light text-decoration-none">
          Điện Tử
        </a>
        <a href="#" className="px-2 text-light text-decoration-none">
          Thiết Bị Số
        </a>
      </div>
    </header>
  );
}
