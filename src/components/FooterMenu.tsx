import FooterBorder from '../assets/images/Subtract.png'
import Home from '../assets/images/Home.png'
import Message from '../assets/images/Message-2.png'
import Icon from '../assets/images/icon.png'
import Phone from '../assets/images/Emergency.png'
import Wallet from '../assets/images/wallet.png'
import Basket from '../assets/images/basket.png'
import Shadow from '../assets/images/Ellipse.png'
import { useNavigate } from 'react-router-dom'
import Tag from '@/ui/Tag'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'

const FooterMenu = () => {
  let navigate = useNavigate()

  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <div className=" w-full flex justify-center">
      <img src={FooterBorder} className="relative w-full z-10 cursor-pointer" />
      <img
        onClick={() => navigate('/Services')}
        src={Home}
        className="absolute top-[-6px] right-[46.5%]  z-20 cursor-pointer"
      />
      <img
        onClick={() => navigate('/Profile')}
        src={Icon}
        className="absolute top-3 right-[10%]  w-[20px] h-[25px]    z-20 cursor-pointer"
      />
      <img
        onClick={() => navigate('/Contact')}
        src={Phone}
        className="absolute top-3 right-[25%]   z-20 cursor-pointer"
      />
      <img
        onClick={() => navigate('/Profile/Wallet')}
        src={Wallet}
        className="absolute top-0 left-[25%] w-[30px] h-[45px]   z-20 cursor-pointer"
      />
      <div className="flex gap-1 absolute top-[-8px] left-[7%]">
        <img
          onClick={() => navigate('/Profile/Checkout')}
          src={Basket}
          className=" w-[45px] h-[60px]  z-20 cursor-pointer "
        />
        {items.length > 0 && (
          <Tag number={items.length} className="absolute z-20" />
        )}
      </div>
      <img src={Shadow} className="absolute w-full z-0" />
    </div>
  )
}

export default FooterMenu
