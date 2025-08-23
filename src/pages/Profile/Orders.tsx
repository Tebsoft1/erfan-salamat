import React from "react";
import Back from "../../assets/images/Back.png";
import { CiViewList } from "react-icons/ci";

import { useGetUserDataQuery } from "../../services/Authenticate";
import ProfileHeader from "./components/ProfileHeader";
import OrdersList from "./components/OrdersList";
import { useNavigate } from 'react-router-dom';

const Orders: React.FC = () => {
  const { data, isLoading } = useGetUserDataQuery();
  const navigate = useNavigate();

  return (
    <div className="py-3  !w-full flex flex-col items-center">
      <div onClick = { () => navigate("/profile") } className="flex gap-[1px] items-center w-full cursor-pointer">
        <img src={Back} className="w-[28px]" alt="بازگشت" />
        <p>بازگشت</p>
      </div>
      <div className="w-full mt-4">
        <ProfileHeader data={data} />
      </div>
      <div className="flex w-full items-center justify-center mt-6 gap-2">
        <CiViewList size={30} />
        <p className="text-[16px]">تاریخچه سفارشات</p>
      </div>
      <div className="w-full mt-6">
        <OrdersList />
      </div>
      <div className="border-1 border-primary-300 rounded-[30px] py-3 w-[95%] mt-12 text-center text-primary-300 cursor-pointer">
        <button onClick={() => navigate('/auth/login')} className="cursor-pointer">
        خروج از حساب کاربری
      </button>
      </div>
      
    </div>
  );
};

export default Orders;
