import React from "react";
import Header from "../Header/Header.jsx"
import avatar from "./avatar.png";
import account from "./account.png"
import bill from "./bill.png"
import sp from "./sp.png"
export default function Profile()
{
    return(
        <div>
            {/* Header */}
            {/* <header><Header/></header> */}
            {/* body */}
            <div class="grid grid-cols-3 gap-4 px-8"> 
                <div class="flex-row">
                    <div class="bg-gray-100 p-5">
                        {/* <div class="h-10"><img src={avatar}  /></div> */}
                        <div class="font-bold">Cái Minh Chánh</div>
                        <div class="opacity-60">Sửa hồ sơ</div>
                    </div>
                   
                </div>
                <div class="bg-gray-100 col-span-2 p-5">
                        <div class="text-xl font-semibold">Hồ sơ của tôi</div>
                        <div class="opacity-60">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                </div>
                <div class=" p-5 flex flex-col gap-y-7 ">
                        <div class ="flex flex-row gap-x-2">
                            <img class =""src={account} alt="" />
                            <button class="text-2xl">Tài khoản của tôi</button>
                        </div>
                        <div class ="flex flex-row gap-x-2">
                            <img class =""src={bill} alt="" />
                            <button class="text-2xl">Đơn hàng đã mua</button>
                        </div>
                        <div class ="flex flex-row gap-x-2">
                            <img class ="w-12 h-12"src={sp} alt="" />
                            <button class="text-2xl">Yêu cầu hỗ trợ</button>
                        </div>
                </div>
                <div class="p-5 flex-col ">
                        <form action="">
                            <div class="grid grid-cols-2 gap-4">
                                <div class = "flex flex-col justify-end gap-y-7 opacity-70">
                                    cột 1
                                    <div >Tên đăng nhập</div>
                                    <div>Tên người dùng</div>
                                    <div>Email</div>
                                    <div>Số điện thoại</div>
                                    <div>Giới tính</div>
                                    <div>Ngày sinh</div>
                                </div>
                                <div class = "flex flex-col gap-y-7">
                                    cột 2
                                    <div>Caiminhchanh</div>
                                    <div>MinhChanh</div>
                                    <div>cm********@yahoo.com</div>
                                    <div>*********36</div>
                                    <div>Nam</div>
                                    <div>
                                    <div>28/03/2002</div>
                                    </div>
                                </div>
 
                            </div>
                        </form>
                        <br/>
                        <button class="bg-sky-600 px-3 py-0.5 rounded-lg text-white hover:bg-sky-900">Sửa</button>
                </div>
                <div class="p-5 flex flex-col justify-center items-center gap-y-2">
                    <div class ="w-24 h-24"><img class ="w-24 h-24"src={avatar} alt="" /></div>
                    
                    <button class="bg-sky-600 px-3 py-0.5 rounded-lg text-white hover:bg-sky-900">Chọn ảnh</button>
                    <div class="flex flex-row opacity-60">
                        Gia nhập 123 ngày
                    </div>
                    <div class="flex flex-row opacity-60">                
                        
                    </div>
                </div>
            </div>

        </div>
        
    )
}