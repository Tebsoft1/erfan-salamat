import React from 'react';
import DoctorShape from '@/assets/images/DoctorShape.png';


const StatsSection: React.FC = () => {
  return (
  <div className="w-full max-w-4xl flex mt-8">
  {/* 
<div className="flex-1 flex flex-col justify-center items-right">
  
  <div className="w-34 h-23 rounded-2xl bg-primary-300 p-2 mb-4 relative flex items-center justify-center">
  
  <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-dunkel w-25 h-[30%] rounded-2xl flex items-center px-2 gap-2">
    
    <div className="text-secondary-100">
      <div className="text-[6px] font-semibold mr-3 whitespace-nowrap">ERFAN HEALTH</div>
      <div className="text-[6px] font-semibold mr-3 whitespace-nowrap">under treatment</div>
    </div>

    <img
      src={Weight}
      alt="Form Icon"
      className="w-4 h-5"
    />
  </div>

  <div className="absolute top-[50%] left-1/2 -translate-x-1/2 text-lg font-bold text-gray-800">
    123
  </div>

</div>

  <div className="w-34 h-23 rounded-2xl bg-primary-300 p-2 flex items-start justify-center relative">
  
  <div className="absolute top-1 bg-dunkel w-25 h-[34%] rounded-2xl flex items-center px-2 gap-2">
    
    <div className="text-secondary-100">
      <div className="text-[6px] font-semibold mr-3 whitespace-nowrap">ERFAN HEALTH</div>
      <div className="text-[6px] font-semibold mr-3 whitespace-nowrap">Specialist doctor</div>
    </div>

    <img
      src={Stethoscope1}
      alt="Form Icon"
      className="w-4 h-5"
    />
  </div>

  <div className="absolute top-[50%] text-lg font-bold text-gray-800">
    42
  </div>
  
</div>
</div> */ }


      <div className="flex-2 flex justify-center">
        <img
          src={DoctorShape}
          alt="Doctor Shape"
          className="w-70 h-75 rounded-4xl p-2"
        />
    </div>

    </div>
  );
};

export default StatsSection;