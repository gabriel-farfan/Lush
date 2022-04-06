import React, { useEffect } from 'react'
import './homeCardPlant.css'
import Button from '@mui/material/Button';
import plants from '../plantsdata.js'
import plantActions from '../../redux/actions/plantActions'
import {connect} from 'react-redux';

function HomeCardPlant(props) {
console.log("🚀 ~ file: HomeCardPlant.jsx ~ line 8 ~ HomeCardPlant ~ props", props)

    const {allPlants, plants, filter, loaded, plant} = props
    const {filterPlant, fetchPlants} = props

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
                <p>{item.price}</p>
                <Button variant="text">
                    DETAILS
                </Button>
            </div>
        </div>
        )})}
    </div>
  )
}

// export default HomeCardPlant
export default connect(state => state.plantReducer, plantActions)(HomeCardPlant)