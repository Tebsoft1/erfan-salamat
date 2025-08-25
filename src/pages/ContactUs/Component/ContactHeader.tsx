import React from 'react'
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import telegram from '../../../assets/images/telegram.png'
import instagram from '../../../assets/images/instagram.png'
import aparat from '../../../assets/images/aparat.png'


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

        <div className="flex flex-row gap-2 items-center">
        <a href="https://t.me/erfansalamat" target="_blank" rel="noopener noreferrer">
            <img 
            className="w-7 h-7 object-contain hover:scale-110 transition-transform duration-200" 
            src={telegram}
            alt="Telegram" 
            />
        </a>

        <a href="https://www.instagram.com/erfansalamatgroup/" target="_blank" rel="noopener noreferrer">
            <img 
            className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-200" 
            src={instagram}
            alt="Instagram" 
            />
        </a>

        <a href="https://www.aparat.com/ErfanSalamatGroup" target="_blank" rel="noopener noreferrer">
            <img 
            className="w-10 h-10 mt-1 -mr-1 object-contain hover:scale-110 transition-transform duration-200" 
            src={aparat}
            alt="Aparat" 
            />
        </a>
    </div>

        <div className="map-container overflow-hidden rounded-xl shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12947.219365626352!2d51.365455!3d35.78017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0786bbf29dff%3A0xe9c940d85c421bed!2sErfan%20Salamat%20Organization!5e0!3m2!1sen!2sus!4v1755935710741!5m2!1sen!2sus"
        width="100%"
        height="420"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>


    <div>
        <ContactForm />
    </div>

        
</div>
);




}

export default ContactHeader
