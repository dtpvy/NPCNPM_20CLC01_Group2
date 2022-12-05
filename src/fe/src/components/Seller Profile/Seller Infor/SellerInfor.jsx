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
    <div className="flex mb-3 pt-2 pb-4 bg-white ">
      <div className="w-4/12 bg-indigo-800 p-3 m-3 text-white flex flex-col justify-around items-center rounded">
        <div className="mr-5 ml-3">
          <div className="inline-block border rounded-full h-10 w-10 mr-2 bg-black"></div>
          <div className="inline-block">
            <p className="">{data.name}</p>
            <p>Online x giờ trước</p>
          </div>
        </div>

        <div className="flex justify-around text-center w-8/12">
          <div className="border border-white inline-block mr-1 w-1/2">
            Theo dõi
          </div>
          <div className="border border-white inline-block w-1/2">Chat</div>
        </div>
      </div>

      <div className="w-3/12 ml-8 mt-4">
        <p className="pb-2">
          <i className="mr-2 fa fa-shopping-basket"></i>
          Sản phẩm: <span className="text-orange-700		">{data.products}</span>
        </p>
        <p className="pb-2">
          <i className="mr-2 fa fa-user-plus"></i>
          Đang theo dõi:{" "}
          <span className="text-orange-700"> {data.following}</span>
        </p>
        <p className="pb-2">
          <i className="mr-2 fa fa-commenting-o"></i>
          Tỉ lệ phản hồi chat:{" "}
          <span className="text-orange-700"> {data.replyPercent}</span>
        </p>
      </div>
      <div className="w-3/12 mx-2 mt-4">
        <p className="pb-2">
          <i className="mr-2 fa fa-window-close-o"></i>
          Tỉ lệ shop hủy đơn:{" "}
          <span className="text-orange-700"> {data.cancelPercent}</span>
        </p>
        <p className="pb-2">
          <i className="mr-2 fa fa-users"></i>
          Người theo dõi:
          <span className="text-orange-700"> {data.followers}</span>
        </p>
        <p className="pb-2">
          <i className="mr-2 fa fa-star-o"></i>
          Đánh giá:
          <span className="text-orange-700">
            {`${data.rate} (${data.numberOfRates} đánh giá)`}
          </span>
        </p>
      </div>
      <div className="w-2/12 mx-2 mt-4">
        <p className="pb-2">
          <i className="mr-2 fa fa-check-circle-o"></i>
          Tham gia: <span className="text-orange-700">{data.join} </span>
        </p>
      </div>
    </div>
  );
}
