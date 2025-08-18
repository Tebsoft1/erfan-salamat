import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useGetServicesIspopularQuery } from '@/services/Customers';
import type { ServiceItemType } from '@/types/servicesTypes/Customers';
import HospitalIcon from '@/assets/images/HospitalIcon.png'
import { QueryHandler } from '@/components/QueryHandler';

const ServicesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const {data:GetServicesIspopular,isLoading:GetServicesIspopularLoading,isError:GetServicesIspopularError}=useGetServicesIspopularQuery()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (GetServicesIspopular?.data?.length || 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (GetServicesIspopular?.data?.length || 1)) % (GetServicesIspopular?.data?.length || 1));
  };

  return (
    <div className="w-full max-w-4xl p-4 text-center">
      <div className="flex flex-col items-center mb-6">
        <div className="rounded-sm p-2 inline-block">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1C7.89543 1 7 1.89543 7 3V7H3C1.89543 7 1 7.89543 1 9V11C1 12.1046 1.89543 13 3 13H7V17C7 18.1046 7.89543 19 9 19H11C12.1046 19 13 18.1046 13 17V13H17C18.1046 13 19 12.1046 19 11V9C19 7.89543 18.1046 7 17 7H13V3C13 1.89543 12.1046 1 11 1H9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-xl mb-4">سرویس های عرفان سلامت</h2>
      </div>

      <div className="relative">
        <div className="overflow-hidden w-full">
          <div
            className="flex w-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <QueryHandler
                    data={GetServicesIspopular}
                    isLoading={GetServicesIspopularLoading}
                    isError={GetServicesIspopularError}
                    render={(services) => (
                      <ul className='flex flex-nowrap overflow-auto'>
                        {services.map((service) => (
                          <Card service={service} key={service.id}  />
                        ))}
                      </ul>
                    )}
                  />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button onClick={prevSlide} className="p-2">
            <FaChevronRight className="text-xl cursor-pointer" />
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: GetServicesIspopular?.data?.length||1 })
              .map((_, index) => index)
              .reverse()
              .map((index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-primary-300' : 'bg-secondary-300'}`}
                ></span>
              ))}
          </div>
          <button onClick={nextSlide} className="p-2 cursor-pointer">
            <FaChevronLeft className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;

type CardPropsType={
  service:ServiceItemType
}

 const Card=(props:CardPropsType)=>{
  const {service}=props

  let navigate=useNavigate()

  return  <button 
                    className="flex flex-col items-center cursor-pointer "
                    onClick={() => navigate(`/serviceForm/typeId=${service.medicalServicesTypesId}&serviceId=${service.id}`)}
                  >
                    <div className="border border-secondary-500/40 rounded-sm p-3 mb-2">
                      <img src={HospitalIcon} alt={service.title} className="w-8 h-8" />
                    </div>
                    <span className="text-xs whitespace-nowrap">{service.title}</span>
                  </button>
              
             
}