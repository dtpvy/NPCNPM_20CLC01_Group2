import React from "react";
import {BrowserRouter as Router, Link } from 'react-router-dom';
import TrashIMG from "../../components/Images/trash.svg";
import houseIMG from "../../components/Images/houseIMG.png"
import product_1 from "../../components/Images/product-1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
// export default function Order () 
const Order = () => {
    return (
    <div>
        <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
                <div className="w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8"> 
                        <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                        <h2 className="font-semibold text-2xl">3 Món</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Tên sản phẩm</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Số lượng</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Đơn giá</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Thành tiền</h3>
                    </div>
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex w-2/5">
                            <div className="w-20">
                                <img className="h-24" src={product_1} alt={product_1}/>
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch</span>
                                <span className="text-red-500 text-xs">Gaomon</span>
                                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Xóa</a>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/5"> 
                            <button className="border-solid border-2 border-gray-800" type="submit"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" alt="minus"/></button>
                            <span className = "text-center border-solid border-2 border-gray-800 border-x-0">
                                <input className = "w-7 text-center" type = "text" name = "qty-input" value="1"/>
                            </span>
                            <button className="border-solid border-2 border-gray-800" type="submit"><img src= "https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" alt="plus"/></button>
                        </div>  
                            <span className="text-center w-1/5 font-semibold text-sm">600 000 vnđ</span>
                            <span className="text-center w-1/5 font-semibold text-sm">600 000 vnđ</span>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img className="h-24" src={product_1} alt=""/>
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch</span>
                                    <span className="text-red-500 text-xs">Gaomon</span>
                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Xóa</a>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5"> 
                                <button className="border-solid border-2 border-gray-800" type="submit"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" alt="minus"/></button>
                                <span className = "text-center border-solid border-2 border-gray-800 border-x-0">
                                    <input className = "w-7 text-center" type = "text" name = "qty-input" value="1"/>
                                </span>
                                <button className="border-solid border-2 border-gray-800" type="submit"><img src= "https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" alt="plus"/></button>
                           </div>
                            <span className="text-center w-1/5 font-semibold text-sm">600 000 vnđ</span>
                            <span className="text-center w-1/5 font-semibold text-sm">600 000 vnđ</span>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img src={product_1} alt=""className="h-24"/>
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">Bảng Vẽ Điện Tử Gaomon 1060Pro - 10x6 inch</span>
                                    <span className="text-red-500 text-xs">Gaomon</span>
                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Xóa</a>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5"> 
                                <button className="border-solid border-2 border-gray-800" type="submit"><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg" alt="minus"/></button>
                                <span className = "text-center border-solid border-2 border-gray-800 border-x-0">
                                    <input className = "w-7 text-center" type = "text" name = "qty-input" value="1"/>
                                </span>
                                <button className="border-solid border-2 border-gray-800" type="submit"><img src= "https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg" alt="plus"/></button>
                           </div>
                            <span className="text-center w-1/5 font-semibold text-sm">600 000 vnđ</span>
                            <span className="text-center w-1/5 font-semibold text-sm">600 000 vnđ</span>
                        </div>  
                        <div> 
                            <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10 items-center"> 
                                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Tiếp tục mua hàng
                            </a>
                        </div>
                    </div>

                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                         <span className="font-semibold text-sm uppercase pr-2">Số món hàng</span>
                        <span className="font-semibold text-sm uppercase">3</span> 
                    </div>
                    {/* <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div> */}
                    {/* <div className="py-10">
                        <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button> */}
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Tổng tiền</span>
                            <span>1 800 000 vnđ</span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded">Mua hàng</button>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    )
}

Order.propTypes = {};

export default Order;