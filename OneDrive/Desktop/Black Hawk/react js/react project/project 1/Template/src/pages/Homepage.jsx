import React from 'react'
import Navbarcomponent from '../components/Navbarcomponent'
import Footercomponent from '../components/Footercomponent'
import Carouselcomponent from '../components/Carouselcomponent'
import Latestproductcomponent from '../components/Latestproductcomponent'
import Trendingproductcomponent from '../components/Trendingproductcomponent'

const Homepage = () => {
  return (
    <>
    <Navbarcomponent/>
    <Carouselcomponent/>
    <Latestproductcomponent/>
    <Trendingproductcomponent/>
    <Footercomponent/>
    </>
  )
}

export default Homepage