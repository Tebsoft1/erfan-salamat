import React from 'react'
import ShadowGreen from '@/assets/images/ShadowGreen.png'
import DoctorImg4 from '@/assets/images/DoctorContainerNew.png'
import { useNavigate } from 'react-router-dom'
import Doctor from '@/assets/images/DoctorNew.png'
import Ambulance from '@/assets/images/AmbulanceNew.png'
import Stethoscope1 from '@/assets/images/StethoscopeNew.png'


const DoctorCard: React.FC = () => {
  const navigate = useNavigate()

  //const handleServiceNavigation = (groupId: number) => {
    //navigate(`serviceList?groupId=${groupId}`)
  //}

  //const handleUnderUpdateNavigation = () => {
    //navigate('/UnderUpdatePage')
  //}

  return (
    <div className="relative w-full mb-6 mt-8">

  <img
    src={ShadowGreen}
    alt=""
    className="absolute -top-40 left-0 w-full z-0"
  />


  <div className="relative bg-dunkel rounded-4xl flex flex-row h-30 w-full z-10">

    <div className="flex items-center w-[96px] h-[143px] -mt-5">
      <img src={DoctorImg4} alt="+" />
    </div>


    <div className="flex flex-row items-center flex-1">
      <div className="flex flex-col font-semibold items-center gap-2 w-[120px] text-[8px] text-dunkel p-2">
        <button
          onClick={() => navigate(`serviceList?groupId=44`)}
          className="bg-primary-300 rounded-full w-[69px] h-[19px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105"
        >
          ویزیت پزشک
        </button>
        <button
          onClick={() => navigate(`serviceList?groupId=43`)}
          className="bg-primary-300 rounded-full w-[69px] h-[19px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105"
        >
          خدمات پرستاری
        </button>
        <button
          onClick={() => navigate(`serviceList?groupId=43`)}
          className="bg-primary-300 rounded-full w-[69px] h-[19px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105"
        >
          خدمات پرستاری
        </button>
      </div>


      <div className="flex flex-row gap-2">
        <div
          className="bg-transparent border-[0.3px] border-secondary-300/60 rounded-lg 
                    flex flex-col items-center justify-center w-[37px] h-[38px] cursor-pointer 
                    transition-transform duration-200 ease-out hover:scale-105"
          onClick={() => navigate('/UnderUpdatePage')}
        >
          <img
            src={Ambulance}
            alt="Ambulance"
            className="w-[22.73px] h-[22.73px]"
          />
        </div>

        <div
          className="bg-transparent border-[0.3px] border-secondary-300/60 rounded-lg 
                    flex flex-col items-center justify-center w-[37px] h-[38px] cursor-pointer 
                    transition-transform duration-200 ease-out hover:scale-105"
          onClick={() => navigate(`serviceList?groupId=44`)}
        >
          <img
            src={Stethoscope1}
            alt="Stethoscope"
            className="w-[22.73px] h-[22.73px]"
          />
        </div>

        <div
          className="bg-transparent border-[0.3px] border-secondary-300/60 rounded-lg 
                    flex flex-col items-center justify-center w-[37px] h-[38px] cursor-pointer 
                    transition-transform duration-200 ease-out hover:scale-105"
          onClick={() => navigate(`serviceList?groupId=43`)}
        >
          <img
            src={Doctor}
            alt="Doctor"
            className="w-[22.73px] h-[22.73px]"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default DoctorCard
