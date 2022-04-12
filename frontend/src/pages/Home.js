import React from 'react'
// import NavBar from '../components/NavBar/NavBar'
import HomeHero from '../components/HomeHero/HomeHero'
import HomeWrapper from '../components/HomeWrapper/HomeWrapper'
import Carrousel from '../components/Carrousel/Carrousel'

function Home() {
  return (
    <div>
        {/* <NavBar /> */}
        <HomeHero />
        <HomeWrapper/>
        <Carrousel/>
    </div>
  )
}

export default Home