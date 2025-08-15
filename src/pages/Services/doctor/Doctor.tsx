import React from 'react'
import { useNavigate } from 'react-router-dom' // اگر از React Router استفاده می‌کنید
import HeaderDoctor from './components/HeaderDoctor'
import DoctorAppoinment from './components/DoctorAppointment'
import HamburgerMenu from '@/components/HamburgerMenu'



const Doctor: React.FC = () => {
  return (
    <div className=" text-white">
      <HamburgerMenu />
      <HeaderDoctor />
      <DoctorAppoinment />
      
    </div>
  )
}

export default Doctor
