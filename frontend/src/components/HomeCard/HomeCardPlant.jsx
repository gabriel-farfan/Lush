import React, { useEffect } from 'react'
import './homeCardPlant.css'
import Button from '@mui/material/Button';
import plantActions from '../../redux/actions/plantActions'
import {connect} from 'react-redux';
import {Link as LinkRouter} from "react-router-dom"
import cartActions from '../../redux/actions/cartActions.js'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function HomeCardPlant(props) {


    const {allPlants, plants, filter, loaded, plant} = props
    const {filterPlant, fetchPlants, addToCart} = props

    useEffect(()=> { 

        !loaded && fetchPlants();
      },[])


    const data = allPlants

  return (
    <div className="cardComponentWrapper">
        {data.map((item) => {
            return (
        <div className="cardWrapper">
            <img className="imgCard" src={process.env.PUBLIC_URL+ `/img/plants/${item.images}`} alt="" />
            <div className="cardTextContent">
                <h3>{item.name}</h3>
                <p>$ {item.price}</p>
                <Button size="small" variant="outlined">
                <LinkRouter className="linkCard" to={`Details/${item._id}`}>DETAILS</LinkRouter>
                </Button>
                <Button size="small" onClick={() => addToCart(item)} variant="contained"><AddShoppingCartIcon/></Button>
            </div>
        </div>
        )})}
    </div>
  )
}

const mapDispatchToProps = {
  fetchPlants: plantActions.fetchPlants,
  addToCart: cartActions.addToCart
}

export default connect(state => state.plantReducer, mapDispatchToProps)(HomeCardPlant)