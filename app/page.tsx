import Achievements from '@/components/Achievements'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Plans from '@/components/Plans'
import PriceList from '@/components/PriceList'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <Achievements/>
      <Plans/>
      <PriceList/>
      <Footer/>
    </div>
  )
}

export default page
