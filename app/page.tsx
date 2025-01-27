import Achievements from '@/components/Achievements'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Plans from '@/components/Plans'
import PriceList from '@/components/PriceList'
import Slider from '@/components/Slider'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Slider/>
      <Achievements/>
      <Plans/>
      <PriceList/>
      <Footer/>
    </div>
  )
}

export default page
