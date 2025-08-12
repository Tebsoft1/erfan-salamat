import React from 'react'
import { useNavigate } from 'react-router-dom' // اگر از React Router استفاده می‌کنید
import Header from './components/HeaderDoctor'
import Footer from './components/Footer'


const Doctor: React.FC = () => {

  return (
    <div className=" text-white flex flex-col items-center w-full">
      <Header />

      <Footer />
      
    </div>
  )
}


export default Doctor
