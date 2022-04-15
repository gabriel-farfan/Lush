import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'

import StandardImageList from '../components/Grid/Grid'

import CarouselComponent from '../components/Carousel/Carousel'
import HomeBlog from '../components/HomeBlog/HomeBlog'


function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <HomeHero />
      <CarouselComponent />
      {/* <HomeWrapper /> */}
      <HomeBlog />
      <StandardImageList />
    </div>
  )
}

export default Home