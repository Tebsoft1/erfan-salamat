import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const ContactHeader: React.FC = () => {

  return (
  <div className="flex flex-col gap-6 bg-primary-300 p-7 rounded-xl shadow-md mt-2">

      <div className="flex justify-center">
        <span className="text-2xl font-bold text-dunkel tracking-wide whitespace-nowrap">
          تماس با ما  
        </span>
      </div>

      <div className="flex items-start gap-2 text-dunkel">
            <FontAwesomeIcon icon={faLocationDot} className="mt-1" />

            <div className="flex flex-col">
                <span className="font-semibold mb-2">آدرس:</span>
                <span>تهران، سعادت آباد، خیابان سرو غربی، بعد از میدان شهرداری، خیابان صدف، خیابان صنوبر، پلاک ۶

                </span>
            </div>
        </div>

        <div className="flex items-start gap-2 text-dunkel">
            <FontAwesomeIcon icon={faPhone} className="mt-1 -mr-1" />

            <div className="flex flex-col gap-2">

                <span>
                <span className="font-bold">تلفن گویا عرفان سلامت:</span> 02172948
                </span>

                <span className='mb-4'>
                (مالی, اداری: 352، دوراندیش عرفان: 320)
                </span>

                <span className='mb-4'>
                <span className="font-bold">فکس:</span> 22361946-021
                </span>

                <span className='mb-4'>
                <span className="font-bold">واحد درمانی:</span> 02172948 (پاسخگویی شبانه‌روزی)
                </span>

                <span>
                <span className="font-bold">شماره واتساپ:</span> 09198099189 (آنکال پرستاری)
                </span>

            </div>
        </div>

        <div className="flex items-start gap-2 text-dunkel">
            <FontAwesomeIcon icon={faEnvelope} className="text-dunkel mt-1" />

            <div className="flex flex-col gap-1">
                <span className="font-bold">ایمیل:</span>
                <span>info@erfansalamat.com</span>
            </div>
        </div>




    </div>
);




}

export default ContactHeader
