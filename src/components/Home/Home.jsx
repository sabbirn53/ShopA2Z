import React from 'react'
import Banner from './Banner'
import HomeCategory from '../Category/HomeCategory'
import ProductCategory from '../Products/ProductCategory'
import Register from '../Register/Register'
import LocationSpread from '../Location/LocationSpread'
import AboutUs from '../About/AboutUs'
import AppSection from '../AppSection/AppSection'
import Sponer from '../Sponser/Sponer'

const Home = () => {
  return (
    <div> 
      <Banner/>
      <HomeCategory/>
      <ProductCategory/>
      <Register/>
      <LocationSpread/>
      <AboutUs/>
      <AppSection/>
      <Sponer/>
    </div>
  )
}

export default Home