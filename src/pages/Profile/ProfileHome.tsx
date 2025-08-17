import React from "react";
import Back from "../../assets/images/Back.png";

import ProfileList from "./components/ProfileList";
import { useGetUserDataQuery } from "../../services/Authenticate";
import ProfileHeader from "./components/ProfileHeader";

import { useNavigate } from 'react-router-dom';



const ProfileHome: React.FC = () => {
  const { data, isLoading } = useGetUserDataQuery();
    const navigate = useNavigate();
  

  if (isLoading) {
    return <p>در حال بارگذاری...</p>;
  }

  return (
    <div className="py-3 px-6 w-full flex flex-col items-center">
      <div className="flex gap-[1px] items-center w-full cursor-pointer">
        <img onClick = { () => navigate("/Services") } src={Back} className="w-[28px] " alt="بازگشت" />
        <p>بازگشت</p>
      </div>
      <div className="w-full mt-4">
        <ProfileHeader data={data}/>
      </div>
      <div className="w-full mt-10">
        <ProfileList />
      </div>
      <div className="border-1 border-primary-300 rounded-[30px] py-3 w-[95%] mt-12 text-center text-primary-300 cursor-pointer">
        خروج از حساب کاربری
      </div>
    </div>
  );
};

export default ProfileHome;
