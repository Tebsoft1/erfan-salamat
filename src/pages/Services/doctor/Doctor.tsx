import React from 'react'
import { useNavigate } from 'react-router-dom' // اگر از React Router استفاده می‌کنید
import HeaderDoctor from './components/HeaderDoctor'
import Footer from './components/Footer'


const Doctor: React.FC = () => {

  return (
    <div className=" text-white flex flex-col items-center w-full">
      <HeaderDoctor />

      <Footer />
      
    </div>
  )
}


export default Doctor
