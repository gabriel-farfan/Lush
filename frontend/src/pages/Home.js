import React from 'react'
// import NavBar from '../components/NavBar/NavBar'
import HomeHero from '../components/HomeHero/HomeHero'
import HomeWrapper from '../components/HomeWrapper/HomeWrapper'
import StandardImageList from '../components/Grid/Grid'


function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <HomeHero />
      <HomeWrapper />
      <StandardImageList />
    </div>
  )
}

export default Home