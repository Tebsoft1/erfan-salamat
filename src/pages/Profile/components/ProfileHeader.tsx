import React from "react";
import { TiPlusOutline } from "react-icons/ti";

const ProfileHeader = () => {
  return (
    <div className="bg-secondary-900 flex justify-between w-full px-8 py-1 rounded-[30px] ">
      <div className="flex items-center gap-1">
        <TiPlusOutline size={26} className="mt-1" />
        <p>پروفایل کاربری</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-full w-[50px] h-[50px] bg-secondary-100">
          <img src="" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold">محمد پیله چی</p>
          <p>09107445878</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
