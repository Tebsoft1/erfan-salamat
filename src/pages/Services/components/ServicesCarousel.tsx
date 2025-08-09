import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Vector from '@/assets/images/Vector.png';
import Bones from '@/assets/images/Bones.png';
import Drip from '@/assets/images/Drip.png';
import FirstAidKit from '@/assets/images/FirstAidKit.png';
import Vial from '@/assets/images/Vial.png'; 

const ServicesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    { name: 'رادیولوژی', image: Bones },
    { name: 'سرم تراپی', image: Drip },
    { name: 'نمونه گیری', image: Vial },
    { name: 'کمک بهیار منزل', image: FirstAidKit }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(services.length / 4)) % Math.ceil(services.length / 4));
  };

  return (
    <div className="w-full max-w-4xl p-4 text-center">
      <div className="flex flex-col items-center mb-6">
        <img
          src={Vector}
          alt="+"
          className="w-10 h-10 rounded-sm p-2"
        />
        <h2 className="text-xl mb-4">سرویس های عرفان سلامت</h2>

      </div>
      
      {/* اسلایدر */}
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="min-w-full grid grid-cols-4 gap-4">
              {services.map((service, index) => (
                <button key={index} className="flex flex-col items-center">
                  <div className="border border-gray-300/40 rounded-sm p-3 mb-2">
                    <img src={service.image} alt={service.name} className="w-8 h-8" />
                  </div>
                  <span className="text-sm">{service.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* دکمه‌های navigation */}
        <div className="flex justify-between items-center mt-4">
          <button onClick={prevSlide} className="p-2">
            <FaChevronRight className="text-xl" />
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(services.length / 4) }).map((_, index) => (
              <span 
                key={index}
                className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-teal-500' : 'bg-gray-300'}`}
              ></span>
            ))}
          </div>
          <button onClick={nextSlide} className="p-2">
            <FaChevronLeft className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
