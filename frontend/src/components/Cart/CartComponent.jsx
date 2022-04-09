import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions.js'

function CartComponent() {


    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer.cart)
    const total = useSelector(state => state.cartReducer.total)



  return (
    
    <div>
        
        {cart.map(product => {
          return(
            <div key={product.plant._id} >
            <div>
              <p>{product.plant.name}</p>
              <p>{product.plant.price}</p>
              <p>{product.qty}</p>

            </div>
            
            </div>
          )
        })}
        
        
        <div>
              
              <p>
                Total: {total}
              </p>
            </div>

    </div>
  )
}



export default CartComponent