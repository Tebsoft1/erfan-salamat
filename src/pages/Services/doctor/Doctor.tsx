import React from 'react'
import { useNavigate } from 'react-router-dom' // اگر از React Router استفاده می‌کنید
import HeaderDoctor from './components/HeaderDoctor'


const Doctor: React.FC = () => {

  return (
    <div className=" text-white flex flex-col items-center w-full">
      <HeaderDoctor />
      
    </div>
  )
}


export default Doctor
