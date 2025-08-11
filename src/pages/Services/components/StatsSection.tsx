import React from 'react';
import DoctorShape from '@/assets/images/DoctorShape.png';
import Weight from '@/assets/images/Weight.png';
import Stethoscope from '@/assets/images/Stethoscope.png';

const StatsSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl flex mt-4">
  <div className="flex-1 flex flex-col justify-center items-right">
  
  {/* First square box (green) */}
  <div className="w-34 h-23 rounded-2xl bg-primary-300 p-2 mb-2 relative flex items-center justify-start">
  
    {/* Black box covering 1/3 width and positioned top-center */}
    <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-dunkel w-25 h-[30%] rounded-2xl flex items-center px-2 gap-2">
  
      {/* Two-line text */}
      <div className="text-secondary-100">
        <div className="text-[6px] font-semibold mr-3 witespace-nowrap">ERFAN HEALTH</div>
        <div className="text-[6px] font-semibold mr-3 whitespace-nowrap">under treatment</div>
      </div>

      {/* Image on the right */}
      <img
        src={Weight}
        alt="Form Icon"
        className="w-4 h-5"
      />

    </div>
  </div>

{/* Second square box */}
  <div className="w-34 h-23 rounded-2xl bg-primary-300 p-2 flex items-center justify-center">
    <div className=" -translate-x-1/2 bg-dunkel w-25 h-[30%] rounded-2xl flex items-center px-2 gap-2">
  
      {/* Two-line text */}
      <div className="text-secondary-100">
        <div className="text-[6px] font-semibold mr-3 witespace-nowrap">ERFAN HEALTH</div>
        <div className="text-[6px] font-semibold mr-3 whitespace-nowrap">Specialist doctor</div>
      </div>

      {/* Image on the right */}
      <img
        src={Stethoscope}
        alt="Form Icon"
        className="w-4 h-5"
      />

    </div>
  </div>
</div>

      {/* Right Column for Container Images */}
      <div className="flex-1 flex justify-center items-start">
        <img
          src={DoctorShape}
          alt="Doctor Shape"
          className="w-80 h-75 rounded-4xl p-2"
        />
    </div>

    </div>
  );
};



export default StatsSection;