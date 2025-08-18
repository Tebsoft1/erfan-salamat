import React from 'react'
import DoctorImg from '@/assets/images/DoctorImg.png'
import { useNavigate } from 'react-router-dom'
import Microscope from "@/assets/images/Microscope.png";
import Blister2 from "@/assets/images/Blister2.png";
import PharmacyImg from "@/assets/images/PharmacyImg.png";

const DoctorCard: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full bg-dunkel rounded-4xl flex flex-row items-stretch p-3 max-h-45 mb-10 mt-8">
      <img
        src={DoctorImg}
        alt="+"
        className="bg-primary-300 w-30 h-45 rounded-4xl p-2 -mt-3 -mr-3"
      />

      <div className="flex flex-row justify-center items-center gap-4 mr-8">

          <div className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-2 flex flex-col items-center w-15 cursor-pointer">
            <img
              src={Microscope}
              alt="+"
              className="w-9 h-9 rounded-sm p-2"
            />
            <span className="text-secondary-100 text-xs">آزمایشگاه</span>
          </div>

          <div className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-2 flex flex-col items-center w-15 cursor-pointer">
            <img
              src={PharmacyImg}
              alt="+"
              className="w-9 h-9 rounded-sm p-2"
            />
            <span className="text-secondary-100 text-xs">داروخانه</span>
          </div>

          <div className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-2 flex flex-col items-center w-15 cursor-pointer">
            <img
              src={Blister2}
              alt="+"
              className="w-9 h-9 rounded-sm p-2"
            />
            <span className="text-secondary-100 text-xs">رادیولوژی</span>
          </div>
      </div>
    </div>
  )
}

export default DoctorCard
