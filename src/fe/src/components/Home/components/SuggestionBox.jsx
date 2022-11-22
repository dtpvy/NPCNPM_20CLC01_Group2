import React from "react";
import img from "../assets/hat.jpg";

export default function SuggestionBox(props) {
  return (
    <a
      href="#"
      className="suggestion--product text-center text-dark  text-decoration-none"
    >
      <img className="w-75" src={img} alt="" />
      <p className="fw-semibold">{props.product}</p>
      <p className="">{props.price}vnđ </p>
    </a>
  );
}
