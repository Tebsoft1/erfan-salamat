import React from "react";
import { CiUser } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { SlCallOut } from "react-icons/sl";
import { GoBook } from "react-icons/go";
import { TiPlusOutline } from "react-icons/ti";
import { BsClipboard2Plus } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa6";
const ProfileList = () => {
  return (
    <div className="px-3 flex flex-col gap-6">
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-3 items-center">
          <CiUser size={20}/>
          <p>اطلاعات هویتی و کاربری</p>
        </div>
        <FaChevronLeft />
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-3 items-center">
          <CiBellOn size={20} />
          <p>اطلاعیه ها</p>
        </div>
        <FaChevronLeft />
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-3 items-center">
          <CiViewList size={20} />
          <p>تاریخچه سفارشات</p>
        </div>
        <FaChevronLeft />
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-3 items-center">
          <SlCallOut size={20}/>
          <p>تماس با ما</p>
        </div>
        <FaChevronLeft />
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-3 items-center">
          <GoBook size={20}/>
          <p>سوالات متداول</p>
        </div>
        <FaChevronLeft />
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-3 items-center">
          <TiPlusOutline size={20}/>
          <p>لیست تمامی خدمات</p>
        </div>
        <FaChevronLeft />
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-3 items-center">
          <BsClipboard2Plus size={20}/>
          <p>پرونده الکترونیک</p>
        </div>
        <FaChevronLeft />
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-3 items-center">
          <CiLocationOn size={20}/>
          <p>آدرس ها</p>
        </div>
        <FaChevronLeft />
      </div>
    </div>
  );
};

export default ProfileList;
