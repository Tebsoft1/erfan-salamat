import React from "react";
import Calendarwaiting from '@/assets/images/Calendarwaiting.png';
import Arrowleft from '@/assets/images/Arrowleft.png';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Backbutton from '@/assets/images/BackButton.png';


const ChooseService: React.FC = () => {
    const navigate = useNavigate();
  
  return (
    <div className="relative p-6 flex flex-col gap-6">
      <div className="absolute top-0 right-2">
        <Link to="/services" className="flex items-center text-m  text-secondary-100 hover:underline">
          <img src={Backbutton} alt="Back" className="h-6 w-6 " />
          <span className='-mt-1'>بازگشت</span>
        </Link>
      </div>
      <div className="bg-dunkel rounded-4xl flex flex-row items-stretch p-3 mt-10 min-h-20">
        <div className="flex flex-row justify-between items-center flex-1 gap-4 relative">
          
          <div className="bg-transparent">
            <img
              src={Calendarwaiting}
              alt="+"
              className="w-10 h-10 mr-2"
            />
          </div>

          <button onClick={() => navigate ("chooseService")} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary-100 text-l whitespace-nowrap text-center cursor-pointer">
            نوبت دهی پزشک 
          </button>

          <div className="bg-transparent">
            <img
              src={Arrowleft}
              alt="+"
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>

      <div className="bg-dunkel rounded-4xl flex flex-row items-stretch p-3 min-h-20">
        <div className="flex flex-row justify-between items-center flex-1 gap-4 relative">
          
          <div className="bg-transparent">
            <img
              src={Calendarwaiting}
              alt="+"
              className="w-10 h-10 mr-2"
            />
          </div>

          <button onClick={() => navigate ("chooseService")} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary-100 text-l whitespace-nowrap text-center cursor-pointer">
            نوبت دهی آزمایشگاه
          </button>

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

export default ChooseService;
