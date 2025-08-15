import React from 'react';
import HospitalIcon from '@/assets/images/HospitalIcon.png';
import Arrowleft from '@/assets/images/Arrowleft.png';

const DoctorAppoinment: React.FC = () => {
  return (
    <div className="w-95/100 mb-5">
      <div className="bg-dunkel rounded-4xl flex flex-row items-stretch p-3 mt-10 min-h-14 cursor-pointer hover:bg-blue hover:text-secondary-100 group">
  <div className="flex flex-row justify-between items-center flex-1 gap-4 relative">
    
    <div className="bg-transparent">
      <img
        src={HospitalIcon}
        alt="+"
        className="w-8 h-8 mr-2 -mt-1"
      />
    </div>

    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 ml-15 -mt-1 -translate-y-1/2 text-secondary-100 text-sm whitespace-nowrap">
      ویزیت تلفنی پزشک عمومی
    </span>

    <span className='-ml-40 text- bg-primary-300 text-dunkel px-4 py-1 rounded-full transition-colors group-hover:hidden'>
      ۱۵۰۰،۰۰۰ ت
    </span>

    <div className="bg-transparent">
      <img
        src={Arrowleft}
        alt="+"
        className="w-10 h-10"
      />
    </div>
  </div>
</div>
    </div>
  );
};

export default DoctorAppoinment;

