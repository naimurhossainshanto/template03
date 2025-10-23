import React from 'react'
import HeroSection from '../sections/HeroSection'
import Menu from '../sections/Menu'
import Promise from '../sections/Promise'
import Reservation from '../sections/Reservation'
import Faq from '../sections/Faq'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Menu/>
        <Promise/>
        <Reservation/>
        <Faq/>

    </div>
  )
}

export default Home