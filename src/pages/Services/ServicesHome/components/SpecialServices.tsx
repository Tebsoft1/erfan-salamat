import React from 'react'
//import DoctorImg3 from '@/assets/images/DoctorImg3.png'
import { useNavigate } from 'react-router-dom'
import Microscope from '@/assets/images/MicroscopeNew.png'
import Blister from '@/assets/images/BlisterNew.png'
import Pharmacy from '@/assets/images/PharmacyNew.png'

const SpecialServices: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="w-[327px] bg-dunkel rounded-4xl flex flex-row justify-between items-stretch p-3 h-[127px] mb-10 mt-8">
      <div className="flex flex-row justify-center items-center gap-2 mr-4">
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
            onClick={() => navigate(`serviceList?groupId=53`)}
          >
            <img src={Blister} alt="+" className="w-[31px] h-[31px]" />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">
            رادیولوژی
          </span>
        </div>
      </div>

      <div className="bg-secondary-100 rounded-4xl flex flex-col items-center w-[96px] h-[143px] -ml-3 -mt-5">
        <span className="text-[10px] text-dunkel text-base font-semibold whitespace-nowrap mt-4 ">
          خدمات ویژه عرفان
        </span>
        <div className="text-[8px] text-center text-dunkel font-light leading-tight mt-2">
          <span>خدمات ویژه عرفان سلامت ، </span><br />
          <span>با رویکردی نوین و فناورانه </span><br />
          <span>برای بهبود و تسریع روند </span><br />
          <span>دریافت خدمات طراحی گردیده است.</span>
        </div>
        <button
          onClick={() => navigate('/UnderUpdatePage')}
          className="bg-dunkel text-secondary-100 rounded-full w-[66px] h-[18px] text-[8px] whitespace-nowrap cursor-pointer mt-2"
        >
          دریافت مشاوره
        </button>
      </div>


    </div>
  )
}

export default SpecialServices
