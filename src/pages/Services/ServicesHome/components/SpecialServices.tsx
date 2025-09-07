import React from 'react'
import DoctorImg3 from '@/assets/images/DoctorImg3.png'
import { useNavigate } from 'react-router-dom'
import Microscope from '@/assets/images/Microscope.png'
import Blister2 from '@/assets/images/Blister2.png'
import PharmacyImg from '@/assets/images/PharmacyImg.png'

const SpecialServices: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full bg-dunkel rounded-4xl flex flex-row items-stretch p-3 max-h-50 mb-10 mt-8">

      <div className="flex flex-row justify-center items-center gap-2 mr-6">
        <div 
          className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-4 flex flex-col items-center w-18 cursor-pointer transition-transform duration-200 ease-out
         hover:scale-105"
          onClick={() => navigate(`serviceList?groupId=52`)}
        >
          <img src={Microscope} alt="+" className="w-9 h-9 rounded-sm p-2" />
          <span className="text-secondary-100 text-xs">آزمایشگاه</span>
        </div>

        <div
          className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-4 flex flex-col items-center w-18 cursor-pointer transition-transform duration-200 ease-out
         hover:scale-105"
          onClick={() => navigate(`pharmacyForm`)}
        >
          <img src={PharmacyImg} alt="+" className="w-9 h-9 rounded-sm p-2" />
          <span className="text-secondary-100 text-xs">داروخانه</span>
        </div>

        <div
          className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-4 flex flex-col items-center w-18 cursor-pointer transition-transform duration-200 ease-out
         hover:scale-105"
          onClick={() => navigate(`serviceList?groupId=51`)}
        >
          <img src={Blister2} alt="+" className="w-9 h-9 rounded-sm p-2" />
          <span className="text-secondary-100 text-xs">فیزیوتراپی</span>
        </div>
      </div>

      <div className="bg-secondary-100 rounded-4xl p-6 flex flex-col justify-between items-center w-64 min-h-[180px]">
        <span className="text-[10px] text-dunkel text-base font-bold mb-2">خدمات ویژه عرفان</span>
        <span className="text-[3px] text-center">
          خدمات ویژه عرفان سلامت، با رویکردی نوین و فناورانه برای بهبود و تسریع روند دریافت خدمات طراحی گردیده است.
        </span>
        <button className="bg-dunkel text-secondary-100 rounded-full px-8 py-2 text-[8px] whitespace-nowrap">
          دریافت مشاوره
        </button>
      </div>

    </div>
  )
}

export default SpecialServices
