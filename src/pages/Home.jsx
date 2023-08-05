import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Announcement from '../components/Announcement'
import Wrapper from '../assets/wrappers/HomePage'
import Slider from '../components/slider/components/Slider'
import Category from '../components/Category'
import Products from '../components/Products'
import Rating from '../components/Rating'
import BasicSlider from '../components/BasicSlider'
function Home() {
  return (
    <Wrapper>
      <Announcement />
      <Navbar />
      <Slider />
      {/* <Category /> */}
      <Products />
      {/* <div>Contents</div> */}
      <Footer />
      <Rating />
    </Wrapper>
  )
}

export default Home
