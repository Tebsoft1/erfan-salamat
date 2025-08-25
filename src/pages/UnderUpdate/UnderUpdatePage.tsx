import React from 'react';
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/images/Back.png'
import UpdatePage from '../../assets/images/UpdatePage.png'

const UnderUpdatePage: React.FC = () => {
    const navigate = useNavigate()
  
  return (
    <div className="py-3 px-2 w-full flex flex-col items-center -mt-1">

      <div onClick={() => navigate('/Services')} className="flex gap-[1px] items-center w-full cursor-pointer">
        <img
          src={Back}
          className="w-[28px] "
          alt="بازگشت"
        />
        <p>بازگشت</p>
      </div>
      
      <img
          src={UpdatePage}
          alt="photo"
          className="w-80 h-55 flex items-center justify-center mt-25"
          onClick={() => navigate('/Services')}
        />

        <div className="flex flex-col items-center justify-center text-secondary-300 leading-loose">
          <h1 className="text-2xl font-bold">به‌زودی</h1>
          <p>این صفحه در آینده اضافه خواهد شد.</p>
        </div>

      

    </div>
  );
};

export default UnderUpdatePage;