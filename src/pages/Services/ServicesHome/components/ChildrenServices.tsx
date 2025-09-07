import React from 'react';
import BabyImg from '@/assets/images/BabyImg.png';
import Vial from '@/assets/images/Vial.png';
import Emergencyphone from '@/assets/images/Emergencyphone.png';
import DNA from '@/assets/images/DNA.png';


const ChildrenServices: React.FC = () => {
  return (
  <div className="relative w-full bg-dunkel rounded-4xl flex flex-row items-stretch p-3 h-[127px] mt-10 mb-5">

    <span className="absolute top-4 right-6 text-secondary-100 text-[8px]">
      خدمات ویژه کودکان
    </span>

    <div className="flex flex-row justify-center items-center flex-1 gap-2 mt-4 ml-2">

      <div className="flex flex-col items-center cursor-pointer">

        <div className="border-[0.3px] border-secondary-500/40 rounded-xl p-4 flex items-center justify-center">
          <img src={Vial} alt="نمونه گیری" className="w-9 h-9" />
        </div>

        <span className="text-secondary-100 text-[10px] mt-2 text-center">نمونه گیری</span>

      </div>

    <div className="flex flex-col items-center cursor-pointer">

      <div className="border-[0.3px] border-secondary-500/40 rounded-xl p-4 flex items-center justify-center">
        <img src={DNA} alt="آزمایشگاه کودک" className="w-9 h-9" />
      </div>

      <span className="text-secondary-100 text-[10px] mt-2 text-center">آزمایشگاه کودک</span>
    
    </div>

    <div className="flex flex-col items-center cursor-pointer">

      <div className="border-[0.3px] border-secondary-500/40 rounded-xl p-4 flex items-center justify-center">
        <img src={Emergencyphone} alt="تماس فوری" className="w-9 h-9" />
      </div>

      <span className="text-secondary-100 text-[10px] mt-2 text-center">تماس فوری</span>

    </div>
  </div>

    <img
      src={BabyImg}
      alt="+"
      className="bg-primary-300 w-40 h-55 rounded-4xl p-2 mb-40 -mt-6 -ml-3"
    />
  </div>
  );
};

export default ChildrenServices;