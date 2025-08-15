import React from "react";
import Back from "../../assets/images/Back.png";

import ProfileList from "./components/ProfileList";
import { useGetUserDataQuery } from "../../services/Authenticate";
import ProfileHeader from "./components/ProfileHeader";
import HamburgerMenu from '@/components/HamburgerMenu'



const ProfileHome: React.FC = () => {
  const { data, isLoading } = useGetUserDataQuery();

  if (isLoading) {
    return <p>در حال بارگذاری...</p>;
  }

  return (
    <div className="py-3 px-6 w-full flex flex-col items-center">
      <HamburgerMenu />
      <div className="flex gap-[1px] items-center w-full">
        <img src={Back} className="w-[28px]" alt="بازگشت" />
        <p>بازگشت</p>
      </div>
      <div className="w-full mt-4">
        <ProfileHeader data={data}/>
      </div>
      <div className="w-full mt-10">
        <ProfileList />
      </div>
      <div className="border-1 border-primary-300 rounded-[30px] py-3 w-[95%] mt-12 text-center text-primary-300">
        خروج از حساب کاربری
      </div>
    </div>
  );
};

export default ProfileHome;
