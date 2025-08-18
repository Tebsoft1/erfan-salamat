import React from 'react'
import FooterBorder from "../assets/images/Subtract.png"
import Home from "../assets/images/Home.png"
import Message from "../assets/images/Message-2.png"
import Phone from "../assets/images/Emergency.png"
import Wallet from "../assets/images/wallet.png"
import Basket from "../assets/images/basket.png"
import Shadow from "../assets/images/Ellipse.png"
import { useNavigate } from 'react-router-dom'


const FooterMenu = () => {
    let navigate = useNavigate()
  
  return (
    <div className=' w-full flex justify-center'>
        <img src={FooterBorder} className='relative w-full z-10 cursor-pointer'/>
        <img onClick={() => navigate("/Services")} src={Home} className='absolute top-[-6px] right-[46.5%]  z-20 cursor-pointer'/>
        <img src={Message} className='absolute top-3 right-[10%]   z-20 cursor-pointer'/>
        <img src={Phone} className='absolute top-3 right-[25%]   z-20 cursor-pointer'/>
        <img onClick={() => navigate("/Profile/Wallet")} src={Wallet} className='absolute top-0 left-[25%] w-[30px] h-[45px]   z-20 cursor-pointer'/>
        <img onClick={() => navigate("/Profile/Checkout")} src={Basket} className='absolute top-[-8px] left-[7%] w-[45px] h-[60px]  z-20 cursor-pointer '/>
        <img src={Shadow} className='absolute  w-full  z-0'/>
    </div>
  )
}

export default FooterMenu