import React from 'react';
import Calendarwaiting from '@/assets/images/Calendarwaiting.png';
import Arrowleft from '@/assets/images/Arrowleft.png';
import Emergencyphone from '@/assets/images/Emergencyphone.png';

const AppointmentSection: React.FC = () => {
  return (
    <div className="w-95/100 mb-5">

      <div className="bg-dunkel rounded-4xl flex flex-row items-stretch p-3 mt-3 min-h-20">
        <div className="flex flex-row justify-between items-center flex-1 gap-4 relative">
          
          <div className="bg-transparent">
            <img
              src={Calendarwaiting}
              alt="+"
              className="w-10 h-10 mr-2"
            />
          </div>

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary-100 text-l whitespace-nowrap text-center">
            نوبت دهی پزشک ، آزمایشگاه
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

      <div className="bg-dunkel rounded-4xl flex flex-row items-stretch p-1 mt-1 min-h-20">
        <div className="flex flex-row justify-between items-center flex-1 relative">
          
          <div className="bg-transparent">
            <img
              src={Emergencyphone}
              alt="+"
              className="w-10 h-10 mr-2"
            />
          </div>

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary-100 text-l whitespace-nowrap text-center">
            ویزیت تلفنی پزشک
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

export default AppointmentSection;

