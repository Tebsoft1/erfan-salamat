import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Backbutton from '@/assets/images/BackButton.png';
import FirstAidKit from '@/assets/images/FirstAidKit.png';

const NurseHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { id: 1, title: "خدمات پرستاری و کمک پرستاری", subtitle: "توضیحات خدمت اول", price: "150,000", img: FirstAidKit },
    { id: 2, title: "خدمات پرستاری و کمک پرستاری", subtitle: "توضیحات خدمت دوم", price: "200,000", img: FirstAidKit },
    { id: 3, title: "خدمات پرستاری و کمک پرستاری", subtitle: "توضیحات خدمت سوم", price: "250,000", img: FirstAidKit },
    { id: 4, title: "خدمتات پرستاری و کمک پرستاری", subtitle: "توضیحات خدمت چهارم", price: "300,000", img: FirstAidKit },
  ];

  return (
    <div className="flex flex-col gap-6">

      <Link to="/services" className="flex items-center text-m text-secondary-100 hover:underline">
        <img src={Backbutton} alt="Back" className="h-6 w-6" />
        <span className='-mt-1'>بازگشت</span>
      </Link>
      
      <div className="bg-secondary-900 rounded-xl p-5 flex flex-row items-center shadow-md space-x-4">
        <img src={FirstAidKit} alt="Form Icon" className="w-6 h-6"/>
        <div className="flex flex-col h-13 justify-center">
          <span className="text-2xl text-primary-300">
            پرستار و کمک پرستار در منزل
          </span>
          <span className="text-base text-secondary-100 mt-2">
            خدمت پرستاری و کمک پرستاری
          </span>
        </div>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-300 text-dunkel p-2 rounded-md w-35 cursor-pointer hover:bg-blue hover:text-secondary-100"
      >
        {isOpen ? "بستن لیست" : "مشاهده خدمات"}
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
        <div className="flex flex-col gap-4 mt-4">
          {services.map(service => (
            <div key={service.id} className="bg-secondary-800 p-4 rounded-lg flex flex-row items-center justify-between shadow-md">
              
              <img src={service.img} alt={service.title} className="w-8 h-8 rounded-md"/>

              <div className="flex flex-col text-center mx-4">
                <span className="text-primary-300 font-bold">{service.title}</span>
                <span className="text-secondary-100 text-sm">{service.subtitle}</span>
              </div>

              <span className="text-lg font-bold text-primary-300">{service.price} تومان</span>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NurseHeader;
