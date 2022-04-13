import React from 'react'
import HomeHero from '../components/HomeHero/HomeHero'
import CarouselComponent from '../components/Carousel/Carousel'
import HomeBlog from '../components/HomeBlog/HomeBlog'



function Home() {
  return (
    <div>
        <HomeHero />
        <CarouselComponent />
        <HomeBlog/>
    </div>
  )
}

export default Home