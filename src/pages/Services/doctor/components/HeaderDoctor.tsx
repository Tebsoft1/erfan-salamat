import React from 'react';
import { Link } from 'react-router-dom';
import Backbutton from '@/assets/images/BackButton.png';
import Stethoscope3 from '@/assets/images/Stethoscope3.png';

const HeaderDoctor: React.FC = () => {
  return (
    <div className="relative p-4">
      

      {/* Logo and Title Container - Centered */}
      <div className="flex flex-col items-center">
        <img src={Stethoscope3} alt="Logo" className="h-10 w-10 " />
        <h1 className="text-xl font-semibold">خدمات درخواست پزشکی</h1>
      </div>
    </div>
  );
}

export default HeaderDoctor;
