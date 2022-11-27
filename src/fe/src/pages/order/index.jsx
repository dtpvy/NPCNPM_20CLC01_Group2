import React from "react";

const Order = () => {
  return (
    <div>
      Order Page
      <div class = "block">
        <div id="Information-Of-Address">Địa chỉ người nhận
          <ul className="list-style-type:none">
            <li id="Customer-Name">Vy Do</li>
            <li id="Customer-Address">Địa chỉ: 227 Nguyễn Văn Cừ, quận 5</li>
          </ul>
        </div>
        <div id="Delivery">Hình thức giao hàng
          
        </div>
      </div>
    </div>
  );
};

Order.propTypes = {};

export default Order;