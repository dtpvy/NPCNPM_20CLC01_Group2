import React from "react";
import img from "./hat.jpg";

export default function SuggestionBox(props) {
  return (
    <a
      href="#"
      className="suggestion--product text-center text-black  no-underline pt-2 w-3/12 lg:w-2/12"
    >
      <div className="relative bg-white ml-1.5 inline-block">
        <img className="inline-block" src={img} alt="" />
        <span class="absolute text-sm text-black top-1 right-1">QC</span>
        <a href="#" className="absolute bottom-6 left-3 lg:left-6">
          <i className="fa fa-heart-o"></i>
        </a>
        <p className="font-semibold h-8">{props.product}</p>
        <p className="">{props.price}vnđ </p>
        <span className="text-info my-5">Freeship</span>
      </div>
    </a>
  );
}
