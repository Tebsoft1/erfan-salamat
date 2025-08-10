import React from "react";
import { MdScience } from "react-icons/md";
import { FaPills } from "react-icons/fa";
import { TbCircleDashed } from "react-icons/tb";

const SpecialServices: React.FC = () => {
  return (
    <div className="w-full bg-[#1E1E1E] rounded-3xl flex flex-row items-stretch p-3 gap-4">
      {/* Right Icons (now on the left) */}
      <div className="flex flex-row justify-center items-center flex-1 gap-4 p-4">
        {/* Radiology */}
        <div className="bg-[#232323] rounded-2xl p-4 flex flex-col items-center w-20">
          <TbCircleDashed className="text-teal-400 text-3xl mb-2" />
          <span className="text-white text-xs">رادیولوژی</span>
        </div>
        {/* Pharmacy */}
        <div className="bg-[#232323] rounded-2xl p-4 flex flex-col items-center w-20">
          <FaPills className="text-teal-400 text-3xl mb-2" />
          <span className="text-white text-xs">داروخانه</span>
        </div>
        {/* Lab */}
        <div className="bg-[#232323] rounded-2xl p-4 flex flex-col items-center w-20">
          <MdScience className="text-teal-400 text-3xl mb-2" />
          <span className="text-white text-xs">آزمایشگاه</span>
        </div>
      </div>

      {/* Left White Box (now on the right) */}
      <div className="bg-white rounded-r-3xl rounded-l-none p-6 flex flex-col justify-between w-1/2 shadow-lg">
        <h2 className="text-lg font-bold mb-3">خدمات ویژه عرفان</h2>
        <p className="text-sm text-gray-700 leading-6 mb-4">
          خدمات ویژه عرفان سلامت، با رویکردی نوین و فناورانه برای بهبود و تسریع روند دریافت خدمات طراحی گردیده است.
        </p>
        <button className="bg-black text-white rounded-full px-5 py-2 text-sm">
          دریافت مشاوره
        </button>
      </div>
    </div>
  );
};

export default SpecialServices;