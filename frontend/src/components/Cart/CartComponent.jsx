import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartActions from '../../redux/actions/cartActions.js'
import './cartComponent.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Link as LinkRouter } from 'react-router-dom'
import PayPal from '../Paypal/Paypal'
import Swal from 'sweetalert2'

function CartComponent() {

  const alertsToasts = (icon, message) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: `${icon}`,
      title: `${message}`
    })
  }

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartReducer.cart)
  const total = useSelector(state => state.cartReducer.total)



  return (

    <div className="checkoutWrapper">

      {cart.map(product => {
        return (

          <div key={product.plant?._id} >
            <div>
              <table className="tableCheckout">
                <thead>
                  <tr>
                    <th> </th>
                    <th className="thWidth">Product</th>
                    <th className="tableWidth">Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="trFlex">
                    <td><img className="plantImage" src={process.env.PUBLIC_URL + `/img/plants/${product.plant?.images}`} alt={product.plant?.name} /></td>
                    <td>{product.plant?.name}</td>
                    <td> <p className="pCheckout">$</p> {product.plant?.price}</td>

                    <td>
                      <Button variant="text" onClick={() => dispatch(cartActions.updateCart(product.plant._id, false))}> - </Button>

                      {product.qty}

                      <Button variant="text" onClick={() => dispatch(cartActions.updateCart(product.plant?._id, true))}> + </Button>
                    </td>
                    <td>

                      <Button variant="text" onClick={() => { dispatch(cartActions.removeFromCart(product.plant?._id)); alertsToasts('success', 'you removed a plant from the cart') }}>
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

      <div className="cartButtons">
        <Button color="error" onClick={() => { dispatch(cartActions.clearCart()); alertsToasts('success', 'you cart is empty') }}>
          Clear Cart
        </Button>

        <div className="checkoutButtons">
          <Button
            variant="outlined"
            color="primary"
          >
            <LinkRouter className="cartComponentBtn" to="/Shop" >Keep Shopping</LinkRouter>
          </Button>
          {/* <Button
                variant="contained"
                color="primary"
              >
                <LinkRouter className="cartComponentBtn2" to="/Cart" >Checkout</LinkRouter>
              </Button> */}
        </div>
      </div>
      <p>
        Total: {total}
      </p>
      <div className="paypalWrapper">
        <PayPal className="paypalComponent" />
      </div>
    </div>
  )
}



export default CartComponent