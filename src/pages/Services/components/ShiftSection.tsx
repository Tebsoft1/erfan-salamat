import React, { useState } from "react";

const ShiftSection: React.FC = () => {
  const [selectedShift, setSelectedShift] = useState<string | null>(null);


  const shifts = [
    { id: 1, name: "شیفت صبح", price: "150,000" },
    { id: 2, name: "شیفت عصر", price: "200,000" },
    { id: 3, name: "شیفت شب", price: "250,000" },
  ];

  return (
    <div className="flex flex-col gap-6">


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

      {selectedShift && (
        <div className="bg-green-800 p-3 rounded-lg text-center text-white font-bold">
          شما "{selectedShift}" را انتخاب کردید ✅
        </div>
      )}
    </div>
  );
};

export default ShiftSection;
