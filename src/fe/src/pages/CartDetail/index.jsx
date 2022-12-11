import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import TrashIMG from "../../components/Images/trash.svg";
import houseIMG from "../../components/Images/houseIMG.png"
import product_1 from "../../components/Images/product-1.png"


const Order = () => {
  return (
    <div className = "bg-[#f5f5fa] w-full h-full ">
        <div className="px-[15px]">  
            <div className="rounded">
                <h4 className = "text-2xl ">Giỏ hàng</h4> 
            </div>
            <div className = "flex">
                <div className = "w-3/4">{/* sản phẩm trong giỏ hàng */}
                    <div className = "bg-white Title-Grid rounded">
                        <label >
                            <input type = "checkbox"/>
                            <span>Tất cả sản phẩm</span>
                        </label>
                        <span>Đơn giá</span>
                        <span>Số lượng</span>
                        <span>Thành tiền</span>
                        <button className="mr-3" type="reset" ><img src = {TrashIMG} alt = "Xóa" /></button>
                    </div>
                    <div className = "...">
                        <div className = "bg-white flex flex-col mb-2 mt-2 rounded">   
                            <div className = "flex">
                                <div>
                                    <label>
                                        <input type = "checkbox"/>
                                    </label>
                                </div>
                                <img src = {houseIMG} alt = "Seller" className = "w-3.5 h-3.5 mt-1 mx-1" />
                                <p>Goma</p>
                            </div>
                            <div class="list-products">
                                <div className = "flex justify-between items-center ">{/*justify-start*/}
                                    <div className = "flex "> {/*thông tin sản phẩm */}
                                        <div> {/* checkbox*/}
                                            <label className = "text-center" >
                                                <input type = "checkbox"/>
                                            </label>
                                        </div>
                                        <div className = "flex flex-row mx-2">
                                            <img src = {product_1} alt = "Bảng vẽ điện tử Gaomon 1060Pro"/>
                                            <div>
                                                <p>Bảng vẽ điện tử Gaomon 1060Pro</p>
                                                <p>Giao tiết kiệm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div> {/*giá sản phẩm*/}
                                        <span>690.000 đ</span>
                                    </div>
                                    <div className = "flex h-7 "> {/*Số lượng*/}
                                        <button className="border-solid border-2 border-gray-800" type="submit"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" alt="minus"/></button>
                                        <span className = "text-center border-solid border-2 border-gray-800 border-x-0">
                                            <input className = "w-7 text-center" type = "text" name = "qty-input" value={1}/>
                                        </span>
                                        <button className="border-solid border-2 border-gray-800" type="submit"><img src= "https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" alt="plus"/></button>
                                    </div>
                                    <div>{/*Thành tiền*/}
                                        <span>669.000 đ</span>
                                    </div>
                                    <button className="mr-3"><img src = {TrashIMG} alt = "Xóa" /></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 mx-5">
                    {/* bảng tính tiền */}
                    <div>
                        <div>
                            <div className="bg-white p-4 rounded">{/* giao tới */} 
                                <div>
                                    <div className="flex justify-between">
                                        <h3>Giao tới</h3>
                                        <a href="Link dẫn tới trang thay đổi địa chỉ ship">Thay đổi</a> 
                                    </div>
                                    <div>
                                        <p>Nguyễn Đình Pháp</p>
                                        <i></i>
                                        <p>0349714892</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded">
                                {/* tổng tiền */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

Order.propTypes = {};

export default Order;