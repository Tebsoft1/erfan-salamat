import FooterBorder from '../assets/images/Subtract.png'
import Home from '../assets/images/Home.png'
// import Icon from '../assets/images/icon.png'
// import Phone from '../assets/images/Emergency.png'
// import Wallet from '../assets/images/wallet.png'
// import Basket from '../assets/images/basket.png'
import Shadow from '../assets/images/Ellipse.png'
import Message2 from '../assets/images/Message2.png'
import EmergencyPhone from '../assets/images/Emergencyphone.png'
import Microspoce from '../assets/images/Microscope.png'
import Stethoscope3 from '../assets/images/Stethoscope3.png'
import { useNavigate } from 'react-router-dom'
//import Tag from '@/ui/Tag'
// import { useSelector } from 'react-redux'
// import type { RootState } from '../store'

const FooterMenu = () => {
  let navigate = useNavigate()
  //const items = useSelector((state: RootState) => state.cart.items)
  return (
    <div className="w-full flex justify-center">
      <img src={FooterBorder} className="relative w-full z-10 cursor-pointer" />

      <div className="absolute top-[-6px] right-[46.3%] z-20 cursor-pointer flex flex-col items-center">
        <img
          onClick={() => navigate('/Services')}
          src={Home}
          className="w-[24px] h-[25px]"
        />
      </div>

      <div className="absolute top-2 right-[10%] z-20 cursor-pointer flex flex-col items-center">
        <img
          //onClick={() => navigate('/Profile')}
          onClick={() => navigate('/UnderUpdatePage')}
          src={Message2}
          className="w-[24px] h-[24px]"
        />
        <span className="text-[10px] text-secondary-100">پشتیبانی</span>
      </div>

      <div className="absolute top-2 right-[25%] z-20 cursor-pointer flex flex-col items-center">
        <img
          //onClick={() => navigate('/Contact')}
          onClick={() => navigate('/UnderUpdatePage')}
          src={EmergencyPhone}
          className="w-[24px] h-[24px]"
        />
        <span className="text-[10px] text-secondary-100">تماس با ما</span>
      </div>

      <div className="absolute top-2 left-[25%] z-20 cursor-pointer flex flex-col items-center">
        <img
          //onClick={() => navigate('/Profile/Wallet')}
          onClick={() => navigate(`serviceList?groupId=44`)}
          src={Stethoscope3}
          className="w-[24px] h-[24px]"
        />
        <span className="text-[10px] text-secondary-100">ویزیت پزشک</span>
      </div>

      <div className="gap-1 absolute top-1 left-[7%] z-20 cursor-pointer flex flex-col items-center">
        <div
          onClick={() => navigate(`serviceList?groupId=52`)}
          className="flex items-center"
        >
          <img
            //onClick={() => navigate('/Profile/Checkout')}
            src={Microspoce}
            className="w-[24px] h-[24px]"
          />
          {/*{items.length > 0 && (
            <Tag number={items.length} className="absolute z-20" />
          )}*/}
        </div>
        <span className="text-[10px] text-secondary-100">آزمایشگاه</span>
      </div>

      <img src={Shadow} className="absolute w-full z-0" />
    </div>
  )
}

export default FooterMenu
