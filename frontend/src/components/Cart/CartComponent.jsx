import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions.js'
import './cartComponent.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

function CartComponent() {


    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartReducer.cart)
    const total = useSelector(state => state.cartReducer.total)



  return (
    
    <div className="checkoutWrapper">
        
        {cart.map(product => {
          return(

            <div key={product.plant._id} >
            <div>
            <table className="tableCheckout">
            <thead>
              <tr>
                <th> </th>
                <th>Product</th>
                <th className="tableWidth">Price</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                  <td><img className="plantImage" src={process.env.PUBLIC_URL+ `/img/plants/${product.plant.images}`} alt="{product.plant.name}" /></td>
                  <td>{product.plant.name}</td>
                  <td> <p className="pCheckout">$</p> {product.plant.price}</td>
                  <td>{product.qty}</td>
                  <td>
                    </td>
                    <td> 
                    <Button variant="text" onClick={() => dispatch(cartActions.updateCart(product.plant._id, false))}> - </Button> 
                    <Button variant="text" onClick={() => dispatch(cartActions.updateCart(product.plant._id, true))}> + </Button> 
                    <Button variant="text" onClick={() => dispatch(cartActions.removeFromCart(product.plant._id))}>
                    <DeleteIcon />
                    </Button>

                    </td>
                </tr>
            </tbody>
            </table>
              
            </div>
            </div>
          )
        })}
        
            <div>
            <Button color="error" onClick={() => dispatch(cartActions.clearCart())}>
                    Clear Cart
                    </Button>
              <p>
                Total: {total}
              </p>
            </div>
      
      </div>
  )
}



export default CartComponent