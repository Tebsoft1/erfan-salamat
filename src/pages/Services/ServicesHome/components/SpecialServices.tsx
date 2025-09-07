import React from 'react'
import DoctorImg3 from '@/assets/images/DoctorImg3.png'
import { useNavigate } from 'react-router-dom'
import Microscope from '@/assets/images/Microscope.png'
import Blister from '@/assets/images/Blister.png'
import Pharmacy from '@/assets/images/Pharmacy.png'

const SpecialServices: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full bg-dunkel rounded-4xl flex flex-row justify-between items-stretch p-3 max-h-45 mb-10 mt-8">

      <div className="flex flex-row justify-center items-center gap-6 mr-6">

        <div className="flex flex-col items-center">
          <div
            className="bg-transparent border-[0.3px] border-secondary-500/40 rounded-md p-4 flex items-center justify-center w-[58.59px] h-[58.59px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105"
            onClick={() => navigate(`serviceList?groupId=52`)}
          >
            <img src={Microscope} alt="+" className="w-[31px] h-[31px]" />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">آزمایشگاه</span>
        </div>


        <div className="flex flex-col items-center">
          <div
            className="bg-transparent border-[0.3px] border-secondary-500/40 rounded-md p-4 flex items-center justify-center w-[58.59px] h-[58.59px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105"
            onClick={() => navigate(`pharmacyForm`)}
          >
            <img src={Pharmacy} alt="+" className="w-[31px] h-[31px]" />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">داروخانه</span>
        </div>


        <div className="flex flex-col items-center">
          <div
            className="bg-transparent border-[0.3px] border-secondary-500/40 rounded-md p-4 flex items-center justify-center w-[58.59px] h-[58.59px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105"
            onClick={() => navigate(`serviceList?groupId=51`)}
          >
            <img src={Blister} alt="+" className="w-[31px] h-[31px]" />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">فیزیوتراپی</span>
        </div>
      </div>


      <div className="bg-secondary-100 rounded-4xl p-6 flex flex-col justify-between items-center w-30 h-45 -ml-3 -mt-3">
        <span className="text-[10px] text-dunkel text-base font-semibold whitespace-nowrap">خدمات ویژه عرفان</span>
        <span className="text-[7px] text-center text-dunkel">
          خدمات ویژه عرفان سلامت، با رویکردی نوین و فناورانه برای بهبود و تسریع روند دریافت خدمات طراحی گردیده است.
        </span>
        <button className="bg-dunkel text-secondary-100 rounded-full w-[66px] h-[18px] text-[8px] whitespace-nowrap cursor-pointer">
          دریافت مشاوره
        </button>
      </div>

    </div>
  )
}

export default SpecialServices
