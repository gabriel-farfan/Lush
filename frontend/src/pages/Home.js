import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import HomeHero from '../components/HomeHero/HomeHero'
import HomeWrapper from '../components/HomeWrapper/HomeWrapper'

function Home() {
  return (
    <div>
        <NavBar />
        <HomeHero />
        <HomeWrapper/>
    </div>
  )
}

export default Home