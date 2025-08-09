import React from 'react';
import { FaCamera, FaUserMd, FaFlask } from 'react-icons/fa';

const SpecialServices: React.FC = () => {
  return (
    <div className="w-full max-w-4xl rounded-lg p-4 mt-2 flex justify-between items-center bg-[#636363]">
      <div className="bg-white text-black p-4 rounded-lg flex items-center space-x-2">
        <span className="text-sm">
          اطلاعات بیشتر درباره خدمات ما را در اپلیکیشن ما بخوانید و از خدمات ویژه ما لذت ببرید
        </span>
        <button className="bg-black text-white px-2 py-1 rounded">بیشتر بدانید</button>
      </div>
      <div className="flex space-x-4">
        <div className="text-center">
          <FaCamera className="text-teal-400 text-2xl mx-auto" />
          <span className="text-white text-xs mt-1 block">رادیولوژی</span>
        </div>
        <div className="text-center">
          <FaUserMd className="text-teal-400 text-2xl mx-auto" />
          <span className="text-white text-xs mt-1 block">داخلی</span>
        </div>
        <div className="text-center">
          <FaFlask className="text-teal-400 text-2xl mx-auto" />
          <span className="text-white text-xs mt-1 block">آزمایشگاه</span>
        </div>
      </div>
    </div>
  );
};

export default SpecialServices;