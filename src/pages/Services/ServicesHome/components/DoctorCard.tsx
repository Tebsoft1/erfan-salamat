import React from 'react'
import DoctorImg3 from '@/assets/images/DoctorImg3.png'
import { useNavigate } from 'react-router-dom'
import Doctor from '@/assets/images/Doctor.png'
import Ambulance from '@/assets/images/Ambulance.png'
import Stethoscope1 from '@/assets/images/Stethoscope1.png'


const DoctorCard: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full bg-dunkel rounded-4xl flex flex-row h-30 mb-6 mt-8">
      <div className="flex items-center bg-primary-300 rounded-4xl w-[110px] h-[140px] -mt-5">
        <img src={DoctorImg3} alt="+" className="w-[110px] h-[140px] -mr-2" />
      </div>

      <div className="flex flex-row justify-between items-center">

        <div className="flex flex-col items-center gap-2 w-[120px] text-[8px] text-dunkel p-2 mt-2">
          <button
           onClick={() => navigate(`serviceList?groupId=44`)}
           className="bg-primary-300 rounded-full w-[66px] h-[18px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105 ">ویزیت پزشک</button>
          <button
          onClick={() => navigate(`serviceList?groupId=43`)}
          className="bg-primary-300 rounded-full w-[66px] h-[18px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105 ">خدمات پرستاری</button>
          <button 
          onClick={() => navigate(`serviceList?groupId=43`)}
          className="bg-primary-300 rounded-full w-[66px] h-[18px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105 ">خدمات پرستاری</button>
        </div>

                
       <div className="flex flex-row gap-2">

          <div
            className="bg-transparent border-[0.3px] border-secondary-500/40 rounded-lg 
                      flex flex-col items-center justify-center w-[37px] h-[38px] cursor-pointer 
                      transition-transform duration-200 ease-out hover:scale-105"
          onClick={() => navigate('/UnderUpdatePage')}
          >
            <img src={Ambulance} alt="Ambulance" className="w-[22.73px] h-[22.73px] rounded-sm" />
          </div>


          <div
            className="bg-transparent border-[0.3px] border-secondary-500/40 rounded-lg 
                      flex flex-col items-center justify-center w-[37px] h-[38px] cursor-pointer 
                      transition-transform duration-200 ease-out hover:scale-105"
            onClick={() => navigate(`serviceList?groupId=44`)}
          >
            <img src={Stethoscope1} alt="Stethoscope" className="w-[22.73px] h-[22.73px] rounded-sm" />
          </div>


          <div
            className="bg-transparent border-[0.3px] border-secondary-500/40 rounded-lg 
                      flex flex-col items-center justify-center w-[37px] h-[38px] cursor-pointer 
                      transition-transform duration-200 ease-out hover:scale-105"
            onClick={() => navigate(`serviceList?groupId=43`)}
          >
            <img src={Doctor} alt="Doctor" className="w-[22.73px] h-[22.73px]" />
          </div>
    </div>

      </div>
    </div>
  )
}

export default DoctorCard
