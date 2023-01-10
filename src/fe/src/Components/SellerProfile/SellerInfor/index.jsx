import React from "react";

export default function SellerInfor() {
  let data = {
    name: "shop giày xinh",
    products: 8,
    following: 1,
    replyPercent: 3,
    cancelPercent: 99,
    followers: 4.3,
    rate: 3.0,
    numberOfRates: 500,
    join: "12 tháng trước",
  };
  return (
    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 bg-white p-4">
      <div className="bg-indigo-700 w-4/5 ml-4 py-4 text-white flex flex-col justify-center gap-2 items-center rounded-md hover:scale-[1.025] duration-300">
        <div className="flex items-center">
          <div className="rounded-full w-12 aspect-square mr-2 bg-black"></div>
          <div className="">
            <p className="text-lg font-semibold">{data.name}</p>
            <p className="text-slate-400">Online x giờ trước</p>
          </div>
        </div>

        <button className="flex gap-3">
          <div className="border border-white w-36 py-1 flex items-center justify-center hover:font-bold hover:bg-blue-500 cursor-pointer">
            Theo dõi
          </div>
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <p className="">
          <i className="mr-2 fa fa-shopping-basket"></i>
          Sản phẩm: <span className="text-orange-700">{data.products}</span>
        </p>
        <p className="">
          <i className="mr-2 fa fa-user-plus"></i>
          Đang theo dõi:{" "}
          <span className="text-orange-700"> {data.following}</span>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="">
          <i className="mr-2 fa fa-window-close-o"></i>
          Tỉ lệ shop hủy đơn:{" "}
          <span className="text-orange-700"> {data.cancelPercent}</span>
        </p>
        <p className="">
          <i className="mr-2 fa fa-users"></i>
          Người theo dõi:
          <span className="text-orange-700"> {data.followers}</span>
        </p>
        <p className="">
          <i className="mr-2 fa fa-star-o"></i>
          Đánh giá:
          <span className="text-orange-700">{` ${data.rate} (${data.numberOfRates} đánh giá)`}</span>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="">
          <i className="mr-2 fa fa-check-circle-o"></i>
          Tham gia: <span className="text-orange-700">{data.join} </span>
        </p>
      </div>
    </div>
  );
}
