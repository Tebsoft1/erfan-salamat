import React from 'react'
import { useNavigate } from 'react-router-dom' // اگر از React Router استفاده می‌کنید
import HeaderDoctor from './components/HeaderDoctor'
import DoctorAppoinment from './components/DoctorAppointment'


const Doctor: React.FC = () => {
  return (
    <div className=" text-white">
      <HeaderDoctor />
      <DoctorAppoinment />
      
    </div>
  )
}

export default Doctor
