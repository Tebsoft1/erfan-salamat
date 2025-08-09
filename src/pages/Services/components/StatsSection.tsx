import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl p-4 flex justify-around">
      <div className="bg-teal-500 p-4 rounded-lg text-center">
        <span className="text-2xl">3945</span>
        <p>تعداد بیماران</p>
      </div>
      <div className="bg-teal-500 p-4 rounded-lg text-center">
        <span className="text-2xl">345</span>
        <p>درمان فعال</p>
      </div>
    </div>
  );
};

export default StatsSection;