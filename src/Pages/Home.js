import React from 'react'
import Catagories from '../Components/Catagories'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import Slider from '../Components/Slider'
const Home = () => {

  localStorage.setItem('Gandu', 'Ishan');
  return (
    <div>
        <Slider/>
        <Catagories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
