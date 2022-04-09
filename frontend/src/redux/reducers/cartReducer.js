const initialState = {
    cart: [],
    total: 0,
    totalQty: 0

}

const TotalPrice = (cart = []) => {
    const total = cart.map(plantitem => plantitem.plant.price * plantitem.qty).reduce((acc, curr) => acc + curr, 0)
    return total.toFixed(2)
}

const TotalQty = (cart = []) => {
    const totalQty = cart.map(plantitem => plantitem.qty).reduce((acc, curr) => acc + curr, 0)
    return totalQty
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'cart/addToCart':
            const bool = state.cart.some(item => item.plant._id === action.payload._id)
            
            
            let cartAux = [...state.cart]
            
            
            if (!bool) {cartAux.push({plant: action.payload, qty: 1})}
            localStorage.setItem('cart', JSON.stringify(cartAux))
            return {
                ...state,
                cart: cartAux,
                total: TotalPrice(cartAux),
                totalQty: TotalQty(cartAux)
            }
        case 'cart/removeFromCart':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case 'cart/checkLocalStorage':
            return {
                ...state,
                cart: action.payload,
                total: TotalPrice(action.payload),
                totalQty: TotalQty(action.payload)
            }
        
        default:
            return state

        }
}

export default cartReducer