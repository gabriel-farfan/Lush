import React from 'react'
import './homeWrapper.css'
import HomeCardPlant from '../HomeCard/HomeCardPlant'
import HomeBlog from '../HomeBlog/HomeBlog'


function HomeWrapper() {
  return (
    <div className="homeWrapper">
        <HomeCardPlant/>
        <HomeBlog/>
    </div>
  )
}

export default HomeWrapper