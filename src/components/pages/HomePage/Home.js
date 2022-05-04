import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import Footer from '../Footer/Footer'
import {home0bj0ne, home0bjTwo, home0bjThree, home0bjFour} from './Data'


function Home() {
    return (
        <>
            <HeroSection {...home0bj0ne} />
            <HeroSection {...home0bjTwo} />
            <HeroSection {...home0bjThree} />
            <HeroSection {...home0bjFour} />
            <Pricing />
            <Footer />
        </>
    )
}

export default Home
