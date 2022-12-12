import React from "react";
import Header from "../Header";
import avatar from "./avatar.png";
import account from "./account.png";
import bill from "./bill.png";
import sp from "./sp.png";
export default function editProfile() {
  return (
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
          <div class="opacity-60">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </div>
        </div>
        <div class=" p-5 flex flex-col gap-y-7 ">
          <div class="flex flex-row gap-x-2">
            <img class="" src={account} alt="" />
            <button class="text-2xl">Tài khoản của tôi</button>
          </div>
          <div class="flex flex-row gap-x-2">
            <img class="" src={bill} alt="" />
            <button class="text-2xl">Đơn hàng đã mua</button>
          </div>
          <div class="flex flex-row gap-x-2">
            <img class="w-12 h-12" src={sp} alt="" />
            <button class="text-2xl">Yêu cầu hỗ trợ</button>
          </div>
        </div>
        <div class="p-5 flex-col ">
          <form action="">
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col justify-end gap-y-7 opacity-70">
                cột 1<div>Tên đăng nhập</div>
                <div>Tên người dùng</div>
                <div>Email</div>
                <div>Số điện thoại</div>
                <div>Giới tính</div>
                <div>Ngày sinh</div>
              </div>
              <div class="flex flex-col gap-y-7">
                cột 2<div>Caiminhchanh</div>
                <div>MinhChanh</div>
                <div>cm********@yahoo.com</div>
                <div>*********36</div>
                <div class="flex flex-row gap-2">
                  <input type="radio" id="nam" name="gioitinh" />
                  <label for="gioitinh">Nam</label>
                  <input type="radio" id="nu" name="gioitinh" />
                  <label for="gioitinh">Nữ</label>
                  <input type="radio" id="khac" name="gioitinh" />
                  <label for="gioitinh">Khác</label>
                </div>
                <div>
                  <label for="date"></label>
                  <select class="w-14" name="birthday" id="date">
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>

                  <label for="month"></label>
                  <select class="w-14" name="birthday" id="month">
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                  </select>

                  <label for="year"></label>
                  <select class="w-14" name="birthday" id="year">
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2006">2006</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <br />
          <button class="bg-sky-600 px-3 py-0.5 rounded-lg text-white hover:bg-sky-900">
            Lưu
          </button>
        </div>
        <div class="p-5 flex flex-col justify-center items-center gap-y-2">
          <div class="w-24 h-24">
            <img class="w-24 h-24" src={account} alt="" />
          </div>

          <button class="bg-sky-600 px-3 py-0.5 rounded-lg text-white hover:bg-sky-900">
            Chọn ảnh
          </button>
          <div class="flex flex-row opacity-60">
            Dụng lượng file tối đa 1 MB
          </div>
          <div class="flex flex-row opacity-60">Định dạng:.JPEG, .PNG</div>
        </div>
      </div>
    </div>
  );
}
