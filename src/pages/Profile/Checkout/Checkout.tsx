import React from 'react'
import CheckOutFooter from './components/CheckOutFooter'
import ShoppingCart from './components/ShoppingCart'
import HamburgerMenu from '@/components/HamburgerMenu'


const Doctor: React.FC = () => {
  return (
    <div className=" text-secondary-100">
      
      <HamburgerMenu />
      <ShoppingCart />
      <CheckOutFooter />
    </div>
  )
}

export default Doctor