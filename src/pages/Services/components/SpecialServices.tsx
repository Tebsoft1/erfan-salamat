import React from "react";
import Microscope from "@/assets/images/Microscope.png";
import Blister2 from "@/assets/images/Blister2.png";
import PharmacyImg from "@/assets/images/PharmacyImg.png";


const SpecialServices: React.FC = () => {
  return (
    <div className="mb-5">
      {/* Gray Box with Icons */}
      <div className="bg-dunkel rounded-4xl flex flex-row items-stretch p-3 mt-6 min-h-25 mb-6 w-full">
        <div className="flex flex-row justify-center items-center flex-1 gap-8">
          {/* Radiology */}
          <div className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-4 flex flex-col items-center w-17">
            <img
              src={Microscope}
              alt="+"
              className="w-9 h-9 rounded-sm p-2"
            />
            <span className="text-secondary-100 text-xs">آزمایشگاه</span>
          </div>
          {/* Pharmacy */}
          <div className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-4 flex flex-col items-center w-17">
            <img
              src={PharmacyImg}
              alt="+"
              className="w-9 h-9 rounded-sm p-2"
            />
            <span className="text-secondary-100 text-xs">داروخانه</span>
          </div>
          {/* Lab */}
          <div className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-4 flex flex-col items-center w-17">
            <img
              src={Blister2}
              alt="+"
              className="w-9 h-9 rounded-sm p-2"
            />
            <span className="text-secondary-100 text-xs">رادیولوژی</span>
          </div>
        </div>
      </div>

      {/* White Box - Now positioned below */}
      <div className="bg-secondary-100 rounded-4xl p-1 flex flex-col justify-center items-center">
        <h2 className="font-bold">خدمات ویژه عرفان</h2>
        <p className="text-m font-semibold text-dunkel mb-8 text-center max-h-7">
          خدمات ویژه عرفان سلامت ، با رویکری نوین و فناورانه برای بهبود و تسریع روند دریافت خدمات طراحی گردیده است. 
        </p>
        <button className="w-45/100 bg-dunkel text-secondary-100 hover:bg-primary-300 hover:text-dunkel rounded-full p-2.5 text-xs whitespace-nowrap mb-2">
          دریافت مشاوره
        </button>
      </div>
    </div>
  );
};

export default SpecialServices;
