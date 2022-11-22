import React from "react";
import img from "../assets/hat.jpg";

export default function CatagoryBox(props) {
  return (
    <a href="#" className="catagory--product text-center text-decoration-none ">
      <img className="w-75" src={img} alt="" />
      <p className="text-dark fw-semibold">{props.text}</p>
    </a>
  );
}
