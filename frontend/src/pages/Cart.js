import React from 'react'
import CartComponent from '../components/Cart/CartComponent'
import HeroCart from '../components/HeroCart/HeroCart'
import PayPal from '../components/PayForm/PayPal'

function Cart() {
  return (
    <div>
        <HeroCart />
        <CartComponent/>
        {/* <PayPal/>   */}
    </div>
  )
}

export default Cart