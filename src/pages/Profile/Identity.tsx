import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import userLogo from '../../assets/images/userLogo.png'
import Back from '../../assets/images/Back.png'


const Identity: React.FC = () => {

  const navigate = useNavigate()
  

  const user = {
    avatar: userLogo,
    firstName: "علی",
    lastName: "رضایی",
    email: "ali@example.com",
    phone: "09123456789",
    nationalCode: "0012345678",
    birthDate: "۱۳۷۰/۰۱/۰۱",
    address: "تهران، سعادت آباد، خیابان سرو غربی",
  };
  
    return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">

      <div onClick={() => navigate('/Profile')} className="flex gap-[1px] items-center w-full cursor-pointer">
        <img
          src={Back}
          className="w-[28px] "
          alt="بازگشت"
        />
        <p>بازگشت</p>
      </div>

      <div className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-2 border-primary-300"
        />
        <div>
          <h1 className="text-2xl font-bold">
            <span>{localStorage.getItem('fullName')}</span>
          </h1>
          <p className="text-secondary-300">{user.email}</p>
        </div>
      </div>


      <div className="bg-secondary-100 p-6 rounded-xl shadow-md relative">
        <h2 className="text-lg text-primary-500 font-semibold mb-4 flex items-center justify-between">
          اطلاعات پایه
        </h2>
        <div className="space-y-2 text-dunkel">
          <p className="text-dunkel">
            شماره موبایل: <span>{localStorage.getItem('mobile')}</span>
            <FontAwesomeIcon className="text-primary-500 ml-1" icon={faCheckCircle} />
          </p>
          <p>ایمیل: {user.email}</p>
        </div>
      </div>


      <div className="bg-secondary-100 p-6 rounded-xl shadow-md relative">
        <h2 className="text-lg text-primary-700 font-semibold mb-4 flex items-center justify-between">
          اطلاعات هویتی
        </h2>
        <div className="space-y-2 text-dunkel">
          <p>
            کد ملی: {user.nationalCode}{" "}
            <FontAwesomeIcon className="text-primary-500 ml-1" icon={faCheckCircle} />
          </p>
          <p>تاریخ تولد: {user.birthDate}</p>
        </div>
      </div>


      <div className="bg-secondary-100 text-dunkel p-6 rounded-xl shadow-md relative">
        <h2 className="text-lg text-primary-500 font-semibold mb-4 flex items-center justify-between">
          آدرس
        </h2>
        <p className="text-dunkel">{user.address}</p>
      </div>
    </div>
  );
};

export default Identity;

