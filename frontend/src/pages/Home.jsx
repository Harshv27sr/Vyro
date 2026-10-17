import React from 'react'
import Navbar from '../components.jsx/Navbar'
import Hero from '../components.jsx/Hero'
import About from '../components.jsx/About'
import Work from '../components.jsx/Work'
import PopularDeals from '../components.jsx/PopularDeals'
import PriceAlerts from '../components.jsx/PriceAlerts'
import Footer from '../components.jsx/Footer'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <Hero />
      <About />
      <div className='bg-[#F6F9FC]'>
        <Work />
        <PopularDeals />
        <PriceAlerts />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
