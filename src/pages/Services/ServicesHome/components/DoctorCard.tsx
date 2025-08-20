import React from 'react'
import DoctorImg3 from '@/assets/images/DoctorImg3.png'
import { useNavigate } from 'react-router-dom'
import Microscope from '@/assets/images/Microscope.png'
import Blister2 from '@/assets/images/Blister2.png'
import PharmacyImg from '@/assets/images/PharmacyImg.png'

const DoctorCard: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full bg-dunkel rounded-4xl flex flex-row items-stretch p-3 max-h-40 mb-10 mt-8">
      <div className="bg-primary-300 rounded-4xl p-2 h-40 -mt-3 -mr-5">
        <img src={DoctorImg3} alt="+" className="w-26 -mr-2" />
      </div>

      <div className="flex flex-row justify-center items-center gap-4 mr-8">
        <div
          className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-2 flex flex-col items-center w-15 cursor-pointer"
          onClick={() => navigate(`serviceList?groupId=52`)}
        >
          <img src={Microscope} alt="+" className="w-9 h-9 rounded-sm p-2" />
          <span className="text-secondary-100 text-xs">آزمایشگاه</span>
        </div>

        <div
          className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-2 flex flex-col items-center w-15 cursor-pointer"
          onClick={() => navigate(`pharmacy`)}
        >
          <img src={PharmacyImg} alt="+" className="w-9 h-9 rounded-sm p-2" />
          <span className="text-secondary-100 text-xs">داروخانه</span>
        </div>

        <div
          className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-2 flex flex-col items-center w-15 cursor-pointer"
          onClick={() => navigate(`serviceList?groupId=51`)}
        >
          <img src={Blister2} alt="+" className="w-9 h-9 rounded-sm p-2" />
          <span className="text-secondary-100 text-xs">فیزیوتراپی</span>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard
