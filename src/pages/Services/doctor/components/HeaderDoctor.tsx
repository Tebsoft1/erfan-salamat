import React from 'react'
import { Link } from 'react-router-dom'
import Backbutton from '@/assets/images/BackButton.png'
import Stethoscope3 from '@/assets/images/Stethoscope3.png'

const HeaderDoctor: React.FC = () => {
  return (
    <div className="relative p-4">
      <div className="absolute top-0 right-2">
        <Link
          to="/services"
          className="flex items-center text-m  text-secondary-100 hover:underline"
        >
          <img src={Backbutton} alt="Back" className="h-6 w-6 " />
          <span className="-mt-1">بازگشت</span>
        </Link>
      </div>

      <div className="flex flex-col items-center -mt-2">
        <img src={Stethoscope3} alt="Logo" className="h-10 w-10" />
        <h1 className="text-l font-semibold mt-2">خدمات درخواست پزشکی</h1>
      </div>
    </div>
  )
}

export default HeaderDoctor
