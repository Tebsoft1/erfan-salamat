import React from 'react'
import CheckOutFooter from './components/CheckOutFooter'
import ShoppingCart from './components/ShoppingCart'

const Doctor: React.FC = () => {
  return (
    <div className=" text-secondary-100 ">
      
      <ShoppingCart />
      <CheckOutFooter />
    </div>
  )
}

export default Doctor