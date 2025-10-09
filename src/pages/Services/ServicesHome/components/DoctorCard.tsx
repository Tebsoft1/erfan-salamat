import React from 'react'
import DoctorImg3 from '@/assets/images/DoctorImg3.png'
import DoctorImg4 from '@/assets/images/DoctorContainerNew.png'
import { useNavigate } from 'react-router-dom'
import Doctor from '@/assets/images/DoctorNew.png'
import Ambulance from '@/assets/images/AmbulanceNew.png'
import Stethoscope1 from '@/assets/images/StethoscopeNew.png'
import ShadowImg from '@/assets/images/Shadow.png'

const DoctorCard: React.FC = () => {
  const navigate = useNavigate()

  const handleServiceNavigation = (groupId: number) => {
    navigate(`serviceList?groupId=${groupId}`)
  }

  const handleUnderUpdateNavigation = () => {
    navigate('/UnderUpdatePage')
  }

  return (
    <div className="relative mb-6 mt-8">
      {/* Shadow Image - سایه گرد که از پشت باکس قرار گرفته و از بالا بیرون می‌زند */}
      <img 
        src={ShadowImg} 
        alt="Shadow" 
        className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[280px] h-[280px] object-cover opacity-30 z-0"
      />
      
      {/* Main Card */}
      <div className="relative bg-dunkel w-[327px] h-[99px] rounded-4xl flex flex-row z-10">
        {/* Doctor Image Section */}
        <div className="flex items-center">
          <img 
            src={DoctorImg4} 
            alt="Doctor" 
            className="w-[96px] h-[143px] object-contain" 
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-row justify-between items-center flex-1 pr-2">
          
          {/* Service Buttons */}
          <div className="flex flex-col items-center gap-2 w-[120px] text-[8px] text-dunkel font-regular p-2 mt-2">
            <button
              onClick={() => handleServiceNavigation(44)}
              className="bg-primary-300 rounded-full w-[66px] h-[18px] cursor-pointer 
                         transition-transform duration-200 ease-out hover:scale-105 
                         focus:outline-none focus:ring-2 focus:ring-primary-400"
              aria-label="ویزیت پزشک"
            >
              ویزیت پزشک
            </button>
            
            <button
              onClick={() => handleServiceNavigation(43)}
              className="bg-primary-300 rounded-full w-[66px] h-[18px] cursor-pointer 
                         transition-transform duration-200 ease-out hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-primary-400"
              aria-label="خدمات پرستاری"
            >
              خدمات پرستاری
            </button>
            
            <button 
              onClick={() => handleServiceNavigation(45)}
              className="bg-primary-300 rounded-full w-[66px] h-[18px] cursor-pointer 
                         transition-transform duration-200 ease-out hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-primary-400"
              aria-label="خدمات تخصصی"
            >
              خدمات تخصصی
            </button>
          </div>

          {/* Icon Buttons */}
          <div className="flex flex-row gap-2">
            <button
              className="bg-transparent border-[0.5px] border-secondary-300/60 rounded-lg flex flex-col items-center justify-center w-[37px] h-[38px] 
                         cursor-pointer transition-transform duration-200 ease-out
                         hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-400"
              onClick={handleUnderUpdateNavigation}
              aria-label="آمبولانس"
            >
              <img 
                src={Ambulance} 
                alt="Ambulance" 
                className="w-[22.73px] h-[22.73px] rounded-sm" 
              />
            </button>

            <button
              className="bg-transparent border-[0.5px] border-secondary-300/60 rounded-lg 
                         flex flex-col items-center justify-center w-[37px] h-[38px] 
                         cursor-pointer transition-transform duration-200 ease-out 
                         hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-400"
              onClick={() => handleServiceNavigation(44)}
              aria-label="گوشی پزشکی"
            >
              <img 
                src={Stethoscope1} 
                alt="Stethoscope" 
                className="w-[22.73px] h-[22.73px] rounded-sm" 
              />
            </button>

            <button
              className="bg-transparent border-[0.5px] border-secondary-300/60 rounded-lg 
                         flex flex-col items-center justify-center w-[37px] h-[38px] 
                         cursor-pointer transition-transform duration-200 ease-out 
                         hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary-400"
              onClick={() => handleServiceNavigation(43)}
              aria-label="پزشک"
            >
              <img 
                src={Doctor} 
                alt="Doctor" 
                className="w-[22.73px] h-[22.73px]" 
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard
