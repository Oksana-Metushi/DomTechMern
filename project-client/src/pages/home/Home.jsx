import React from 'react'
import Banner from './Banner'
import Services from './Services'
import AboutUs from './AboutUs'
import Brands from './Brands'
import Blog from './Blog'
import Newsletter from '../../components/Newsletter'
import Products from './Products'

const Home = () => {
  return (
    <div>
       <Banner/>
       <Services/>
       <Brands/>
       <Products/>
       <AboutUs/>
       <Blog/>
       <Newsletter/>
    </div>
  )
}

export default Home