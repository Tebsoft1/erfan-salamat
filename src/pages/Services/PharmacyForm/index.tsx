import React from "react";
import Back from "../../../assets/images/Back.png";
import { CiMedicalCase } from "react-icons/ci";
import ProfileHeader from "@/pages/Profile/components/ProfileHeader";

import { useNavigate } from "react-router-dom";
import { useGetUserDataQuery } from "@/services/Authenticate";
import PharmacyForm from "./components/PharmacyForm";

const Pharmacy: React.FC = () => {
    const { data, isLoading } = useGetUserDataQuery();
  const navigate = useNavigate();

  return (
    <div className="py-3  !w-full flex flex-col items-center">
      <div
        onClick={() => navigate("/profile")}
        className="flex gap-[1px] items-center w-full cursor-pointer"
      >
        <img src={Back} className="w-[28px]" alt="بازگشت" />
        <p>بازگشت</p>
      </div>
      <div className="w-full mt-4">
        <ProfileHeader data={data} />
      </div>
      <div className="flex w-full items-center justify-center mt-6 gap-2">
        <CiMedicalCase size={30} />
        <p className="text-[16px]">فرم داروخانه </p>
      </div>
      <div className="w-full mt-6">
        <PharmacyForm />
        </div>
    </div>
  );
};

export default Pharmacy;
