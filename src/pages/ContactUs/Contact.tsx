import React from 'react';
import ContactHeader from "./Component/ContactHeader"
import ContactForm from './Component/ContactForm';
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/images/Back.png'

const Contact: React.FC = () => {
    const navigate = useNavigate()
  
  return (
    <div className="py-3 px-2 w-full flex flex-col items-center">

      <div onClick={() => navigate('/Services')} className="flex gap-[1px] items-center w-full cursor-pointer">
        <img
          src={Back}
          className="w-[28px] "
          alt="بازگشت"
        />
        <p>بازگشت</p>
      </div>
      
      <ContactHeader />

    </div>
  );
};

export default Contact;