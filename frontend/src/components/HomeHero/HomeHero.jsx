import React from 'react'
import './homeHero.css'
import Button from '@mui/material/Button';
import {Link as LinkRouter} from "react-router-dom"

function HomeHero() {
  return (
    <div className="homeHero">
        <div className="homeElementsWrapper">
            <h1 className="homeH1Tittle">Lush
            <span className="homeSpanTittle">.</span>
            </h1>
            <h2 className="homeH2SubTittle">
            Satisfying the human need to be connected to nature.
            </h2>
            
            <Button className="homeHeroButton" variant="contained" color="secondary">
            <LinkRouter className="linkCard22" to={`/SHOP`}>SHOP NOW</LinkRouter>
                
            </Button>
            
        </div>
    </div>
  )
}

export default HomeHero