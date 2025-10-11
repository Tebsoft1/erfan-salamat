import React from 'react'
//import DoctorImg3 from '@/assets/images/DoctorImg3.png'
import { useNavigate } from 'react-router-dom'
import Microscope from '@/assets/images/MicroscopeNew.png'
import Blister from '@/assets/images/BlisterNew.png'
import Pharmacy from '@/assets/images/PharmacyNew.png'
import SpecialContainer from '@/assets/images/SpecialContainer2.png'

const SpecialServices: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full bg-dunkel rounded-4xl flex flex-row justify-between items-stretch p-3 h-[135px] mb-10 mt-8 z-10">
      <div className="flex flex-row justify-center items-center gap-4 mr-4 -ml-2">
        <div className="flex flex-col items-center">
          <div
            className="bg-transparent border-[0.3px] border-secondary-300/60 rounded-md p-2 flex items-center justify-center w-[58.59px] h-[58.59px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105"
            onClick={() => navigate(`serviceList?groupId=52`)}
          >
            <img src={Microscope} alt="+" className="w-[31px] h-[31px]" />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">آزمایشگاه</span>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="bg-transparent border-[0.3px] border-secondary-300/60 rounded-md p-2 flex items-center justify-center w-[58.59px] h-[58.59px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105"
            onClick={() => navigate(`pharmacyForm`)}
          >
            <img src={Pharmacy} alt="+" className="w-[31px] h-[31px]" />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">داروخانه</span>
        </div>

        <div className="flex flex-col items-center">
          <div
            className="bg-transparent border-[0.3px] border-secondary-300/60 rounded-md p-2 flex items-center justify-center w-[58.59px] h-[58.59px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105"
            onClick={() => navigate(`serviceList?groupId=53`)}
          >
            <img src={Blister} alt="+" className="w-[31px] h-[31px]" />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">
            رادیولوژی
          </span>
        </div>
      </div>

      <div className="relative flex flex-col items-center w-[96px] h-[140px] -ml-3 -mt-4">
        <img src={SpecialContainer} alt="" className="w-full h-full object-cover rounded-4xl" />

        <button
          onClick={() => navigate('/UnderUpdatePage')}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-dunkel text-secondary-100 rounded-full w-[66px] h-[18px] text-[8px] whitespace-nowrap cursor-pointer"
        >
          دریافت مشاوره
        </button>
      </div>



    </div>
  )
}

export default SpecialServices
