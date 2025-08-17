import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Backbutton from '@/assets/images/BackButton.png';
import FirstAidKit from '@/assets/images/FirstAidKit.png';

const NurseHeader: React.FC = () => {

  return (
    <div className="flex flex-col gap-6">

      <Link to="/services" className="flex items-center text-m text-secondary-100 hover:underline">
        <img src={Backbutton} alt="Back" className="h-6 w-6" />
        <span className='-mt-1'>بازگشت</span>
      </Link>
      
      <div className="bg-secondary-900 rounded-xl p-5 flex flex-row items-center shadow-md space-x-4">
        <img src={FirstAidKit} alt="Form Icon" className="w-6 h-6"/>
        <div className="flex flex-col h-13 justify-center">
          <span className="text-2xl text-primary-300">
            پرستار و کمک پرستار در منزل
          </span>
          <span className="text-base text-secondary-100 mt-2">
            خدمت پرستاری و کمک پرستاری
          </span>
        </div>
      </div>

    </div>
  );
};

export default NurseHeader;
