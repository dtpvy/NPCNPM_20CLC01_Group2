import React from "react";
import CatagoryBox from "./CatagoryBox.jsx";
export default function Catagory() {
  let catagories = [
    "Quần áo",
    "Điện thoại",
    "Thiết bị điện tử",
    "Mẹ & Bé",
    "Sắc Đẹp",
    "Sức Khỏe",
    "Sách",
    "Giải trí",
    "Thể thao & Du lịch",
  ];
  let Catagories = catagories.map((thing) => {
    return <CatagoryBox text={thing} />;
  });
  return (
    <div className="catagory-container mx-1 my-5 bg-white ">
      <h3 className="mx-5 py-3">Danh mục nổi bật</h3>
      <div className="d-flex flex-wrap">{Catagories}</div>
    </div>
  );
}
