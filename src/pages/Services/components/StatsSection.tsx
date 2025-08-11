import React from 'react';
import Container from '@/assets/images/Container.png';
import Container2 from '@/assets/images/Container2.png';
import DoctorShape from '@/assets/images/DoctorShape.png';


const StatsSection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl flex mt-4">
      {/* Left Column for DoctorShape Image */}
      <div className="flex-1 flex flex-col justify-center items-right">
        <img
          src={Container2}
          alt="Container 2"
          className="w-30 h-33 rounded-4xl p-2 mb-2"
        />

        <img
          src={Container}
          alt="Container"
          className="w-30 h-33 rounded-4xl p-2"
        />
      </div>

      {/* Right Column for Container Images */}
      <div className="flex-1 flex justify-center items-start">
        <img
          src={DoctorShape}
          alt="Doctor Shape"
          className="w-80 h-75 rounded-4xl p-2"
        />
    </div>

    </div>
  );
};



export default StatsSection;