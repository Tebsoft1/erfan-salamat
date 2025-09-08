import React from 'react';
import DoctorCornerImg from '@/assets/images/DoctorCornerImg.png';
import Weight from '@/assets/images/Weight.png';
import Stethoscope1 from '@/assets/images/Stethoscope1.png';
import DoubleRight from '@/assets/images/DoubleRight.png';

const StatsSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl flex">

      <div className="flex-1 flex flex-col justify-center items-right mr-4 space-y-3">
        

        <div className="w-[98px] h-[75px] rounded-2xl bg-primary-300 p-2 relative flex items-center justify-center mt-6">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-dunkel w-25 h-[30%] rounded-2xl flex items-center px-2 gap-2">
            <div className="text-secondary-100">
              <div className="text-[6px] font-semibold mr-3 whitespace-nowrap">ERFAN HEALTH</div>
              <div className="text-[6px] font-semibold mr-3 whitespace-nowrap">under treatment</div>
            </div>
            <img src={Weight} alt="Form Icon" className="w-4 h-5" />
          </div>
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 text-[32px] text-dunkel">
            <span className="en-number">3945</span>
          </div>
        </div>


        <div className="w-[98px] h-[75px] rounded-2xl bg-primary-300 p-2 relative flex items-center justify-center">
          <div className="absolute top-1 bg-dunkel w-25 h-[34%] rounded-2xl flex items-center px-2 gap-2">
            <div className="text-secondary-100">
              <div className="text-[6px] font-semibold mr-3 whitespace-nowrap">ERFAN HEALTH</div>
              <div className="text-[6px] font-semibold mr-3 whitespace-nowrap">Specialist doctor</div>
            </div>
            <img src={Stethoscope1} alt="Form Icon" className="w-4 h-5" />
          </div>
          <div className="absolute top-[40%] text-[32px] text-dunkel">
            <span className="en-number">345</span>
          </div>
        </div>


        <div className="flex flex-row items-center justify-center -mr-6 mt-1 cursor-pointer">
          <img src={DoubleRight} alt="Right Arrow" className="w-[14px] h-[14px] ml-1 mb-1" />
          <span className="text-[8px] text-secondary-100">مطالعه بیشتر</span>
        </div>

      </div>


      <div className="flex-2 flex justify-center">
        <img
          src={DoctorCornerImg}
          alt="Doctor Shape"
          className="rounded-4xl p-2"
        />
      </div>
    </div>
  );
};

export default StatsSection;
