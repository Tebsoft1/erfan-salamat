import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FirstAidKit from '@/assets/images/FirstAidKit.png';

const NurseMain: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    { id: 1, title: "خدمات پرستاری و کمک پرستاری", subtitle: "پرستار", price: "150,000", img: FirstAidKit },
    { id: 2, title: "خدمات پرستاری و کمک پرستاری", subtitle: "کمک بهیار", price: "200,000", img: FirstAidKit },
    { id: 3, title: "خدمات پرستاری و کمک پرستاری", subtitle: "پرستار در منزل", price: "250,000", img: FirstAidKit },
    { id: 4, title: "خدمتات پرستاری و کمک پرستاری", subtitle: "کمک بهیار در منزل", price: "300,000", img: FirstAidKit },
  ];

  const handleServiceClick = (service: any) => {
    navigate("/Services/NurseServiceChoose", { state: service }); 
  };

  return (
    <div className="flex flex-col mt-6">

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-300 text-dunkel p-2 rounded-md w-35 cursor-pointer hover:bg-blue hover:text-secondary-100"
      >
        {isOpen ? "بستن لیست" : "جزئیات سرویس "}
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
        <div className="flex flex-col gap-3 mt-4 whitepsace-nowrap cursor-pointer">
          {services.map(service => (
            <div 
            key={service.id} onClick={() => handleServiceClick(service)}  className="group bg-dunkel p-3 rounded-3xl 
            flex flex-row items-center justify-between shadow-md hover:bg-blue hover:scale-[1.02] transition-all duration-300 hover:rounded-2xl">
              
              <img src={service.img} alt={service.title} className="w-8 h-8 rounded-md"/>

              <div className="flex flex-col text-center mx-4">
                <span className="text-primary-300 font-bold group-hover:text-secondary-100 ">{service.title}</span>
                <span className="text-secondary-100 text-sm group-hover:text-secondary-300">{service.subtitle}</span>
              </div>

              <span className="text-lg font-bold text-primary-300 group-hover:text-secondary-100">{service.price} تومان</span>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NurseMain;
