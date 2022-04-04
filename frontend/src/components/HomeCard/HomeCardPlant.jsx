import React from 'react'
import './homeCardPlant.css'
import Button from '@mui/material/Button';
import plants from '../plantsdata.js'

function HomeCardPlant() {


    const data = plants

  return (
    <div className="cardComponentWrapper">
        {data.map((item) => {
            return (
        <div className="cardWrapper">
            <img className="imgCard" src={process.env.PUBLIC_URL+ `/img/plants/${item.image}`} alt="" />
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

export default HomeCardPlant