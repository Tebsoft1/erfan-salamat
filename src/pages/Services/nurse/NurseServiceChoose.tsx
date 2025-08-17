import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Backbutton from '@/assets/images/BackButton.png';

const NurseServiceChoose: React.FC = () => {
  const location = useLocation();
  const service = location.state; 
  const [selectedShift, setSelectedShift] = useState<string | null>(null);

  if (!service) return <p>هیچ خدمتی انتخاب نشده</p>;

  const shifts = [
    { id: 1, name: "شیفت صبح", price: "150,000" },
    { id: 2, name: "شیفت عصر", price: "200,000" },
    { id: 3, name: "شیفت شب", price: "250,000" },
  ];

  return (
    <div className="flex flex-col gap-6">

      <Link to="/services/nurse" className="flex items-center text-m text-secondary-100 hover:underline">
        <img src={Backbutton} alt="Back" className="h-6 w-6" />
        <span className='-mt-1'>بازگشت</span>
      </Link>

      <div className="bg-secondary-900 rounded-xl p-5 flex flex-row items-center shadow-md space-x-4 -mb-2">
        <img src={service.img} alt={service.title} className="w-6 h-6"/>
        <div className="flex flex-col h-13 justify-center">
          <span className="text-2xl text-primary-300">
            پرستار و کمک پرستار در منزل
          </span>
          <span className="text-base text-secondary-100 mt-2">
            خدمت پرستاری و کمک پرستاری
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        <span className="text-base font-bold text-primary-300 mb-2">انتخاب شیفت</span>
        {shifts.map((shift) => (
          <button
            key={shift.id}
            onClick={() => setSelectedShift(shift.name)}
            className={`flex flex-row justify-between items-center p-3 rounded-3xl border cursor-pointer 
              ${selectedShift === shift.name 
                ? "bg-blue border-blue text-secondary-100 scale-[1.02]" 
                : "bg-secondary-900 border-secondary-700 text-secondary-100"} 
              transition-all duration-300`}
          >
            <span>{shift.name}</span>
            <span>{shift.price} تومان</span>
          </button>
        ))}
      </div>

      {/* نمایش انتخاب کاربر */}
      {selectedShift && (
        <div className="bg-green-800 p-3 rounded-lg text-center text-white font-bold">
          شما "{selectedShift}" را انتخاب کردید ✅
        </div>
      )}
    </div>
  );
};

export default NurseServiceChoose;
