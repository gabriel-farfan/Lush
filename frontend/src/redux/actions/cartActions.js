
const cartActions = {
    addToCart: (product) => {
        return (dispatch) => {
            dispatch({ type: 'cart/addToCart', payload: product })
        }
    },

    removeFromCart: (product) => {

        return (dispatch) => {
            dispatch({ type: 'cart/removeFromCart', payload: { id: product } })
        }
    },

    updateCart: (product, qty) => {
        return (dispatch) => {
            dispatch({ type: 'cart/updateCart', payload: { id: product, bool: qty } })
        }
    },

    checkLocalStorage: () => {
        return (dispatch) => {
            const cart = JSON.parse(localStorage.getItem('cart'))
            dispatch({ type: 'cart/checkLocalStorage', payload: cart })

        }
    },

    clearCart: () => {
        return (dispatch) => {
            dispatch({ type: 'cart/clearCart' })
        }
    }


}
export default cartActions