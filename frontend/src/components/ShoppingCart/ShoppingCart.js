import {useReducer} from "react"
import ProductItem from "../ProductItem.js/ProductItem";

import { shoppingInitialState, shoppingReducer } from "../../redux/reducers/shoppingReducer";
const ShoppingCart =() =>{
    useReducer[state,dispatch] = useReducer(shoppingReducer,shoppingInitialState);
    const{products,cart} = state
    const addToCart = (id) =>{console.log(id)};
    const delFromCart = () =>{};
    const clearCart = () =>{};
  
    return(
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className="box">
                {products.map((product)=><ProductItem key={product.id} data={product} addToCart={addToCart}/>)}

            </article>
            <h3>Carrito</h3>
            <article className="box"></article>

        </div>
    )
}
export default ShoppingCart;