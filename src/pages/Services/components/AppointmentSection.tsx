import React from 'react';
import { FaPhone, FaClock, FaPlus } from 'react-icons/fa';

const AppointmentSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl p-4 flex items-center justify-between">
      <div className="bg-teal-500 p-4 rounded-lg flex flex-col items-center">
        <FaPhone className="text-2xl mb-2" />
        <span>نوبت‌گیری</span>
      </div>
      <div className="bg-teal-500 p-4 rounded-lg flex flex-col items-center">
        <FaClock className="text-2xl mb-2" />
        <span>زمان‌بندی</span>
      </div>
      <div className="bg-teal-500 p-4 rounded-lg flex flex-col items-center">
        <FaPlus className="text-2xl mb-2" />
        <span>اضافه کردن</span>
      </div>
    </div>
  );
};

export default AppointmentSection;

