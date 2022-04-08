import React from 'react'
import './homeHero.css'
import Button from '@mui/material/Button';

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
                SHOP NOW
            </Button>
            
        </div>
    </div>
  )
}

export default HomeHero