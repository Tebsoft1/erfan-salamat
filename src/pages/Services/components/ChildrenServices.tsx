import React from 'react';
import BabyImg from '@/assets/images/BabyImg.png';
import Vial from '@/assets/images/Vial.png';
import Emergencyphone from '@/assets/images/Emergencyphone.png';
import DNA from '@/assets/images/DNA.png';


const ChildrenServices: React.FC = () => {
  return (
  <div className="relative w-95/100 bg-dunkel rounded-4xl flex flex-row items-stretch p-3 max-h-50 mt-8">

    {/* Top-right text */}
    <span className="absolute top-4 right-6 text-secondary-100 text-m font-semibold">
      خدمات ویژه کودکان
    </span>

    <div className="flex flex-row justify-center items-center flex-1 gap-2 mt-4 ml-2">
      {/* Icon + Label Wrapper */}
      <div className="flex flex-col items-center">
        {/* Icon Box */}
        <div className="bg-transparent border border-secondary-500/40 rounded-xl p-4 flex items-center justify-center">
          <img src={Vial} alt="آزمایشگاه" className="w-9 h-9" />
        </div>
        {/* Label Outside Box */}
        <span className="text-secondary-100 text-xs mt-2 text-center">آزمایشگاه</span>
    </div>

    <div className="flex flex-col items-center">
      <div className="bg-transparent border border-secondary-500/40 rounded-xl p-4 flex items-center justify-center">
        <img src={DNA} alt="داروخانه" className="w-9 h-9" />
      </div>
      <span className="text-secondary-100 text-xs mt-2 text-center">داروخانه</span>
    </div>

    <div className="flex flex-col items-center">
      <div className="bg-transparent border border-secondary-500/40 rounded-xl p-4 flex items-center justify-center">
        <img src={Emergencyphone} alt="رادیولوژی" className="w-9 h-9" />
      </div>
      <span className="text-secondary-100 text-xs mt-2 text-center">رادیولوژی</span>
    </div>
    </div>

    <img
      src={BabyImg}
      alt="+"
      className="bg-primary-300 w-30 h-55 rounded-4xl p-2 mb-40 -mt-6"
    />
  </div>
  );
};

export default ChildrenServices;