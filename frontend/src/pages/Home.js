import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'

import HomeWrapper from '../components/HomeWrapper/HomeWrapper'
import StandardImageList from '../components/Grid/Grid'

import CarouselComponent from '../components/Carousel/Carousel'
import HomeBlog from '../components/HomeBlog/HomeBlog'


function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <HomeWrapper /> */}
      <HomeHero />
      <CarouselComponent />
      {/* <HomeBlog /> */}
      <StandardImageList />
    </div>
  )
}

export default Home