import type { UserData } from "@/types/userdata";
import React from "react";
import { TiPlusOutline } from "react-icons/ti";
import User from "../../../assets/images/User.png"


type ProfileHeaderProps = {
  data?: UserData
}


const ProfileHeader: React.FC<ProfileHeaderProps> = ({data}) => {
  return (
    <div className="bg-secondary-900 flex justify-between w-full px-8 py-3 rounded-[30px]">
      <div className="flex items-center gap-1">
        <TiPlusOutline size={26} className="mt-1" />
        <p>پروفایل کاربری</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-full w-[50px] h-[50px] bg-secondary-100 flex items-center justify-center">
          <img src={User} alt="User Avatar" className="w-[40px] h-[40px]" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold">{data?.fName} {data?.lName}</p>
          <p>{data?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
