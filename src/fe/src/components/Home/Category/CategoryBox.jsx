import React from "react";
import img from "./hat.jpg";

export default function CategoryBox(props) {
  return (
    <a
      href="#"
      className="suggestion--product text-center text-black  no-underline ml-6 mr-7 mb-1  w-2/12 lg:w-1/12"
    >
      <div className="relative bg-white ml-1.5 inline-block ">
        <img className="inline-block w-5/6" src={img} alt="" />
        <p className="font-semibold ">{props.product}</p>
      </div>
    </a>
  );
}
