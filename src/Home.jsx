import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Homepage_Components/Hero'
import Brandcarousel from './Components/Brandcarousel'
import Featuredproductcarousel from './Components/Featuredproductcarousel'
import Popularcategories from './Components/Popularcategories'
import Decoration1 from './Components/Homepage_Components/Decoration1'
import Topsellingproductcarousel from './Components/Topsellingproductcarousel'
import Decoration2 from './Components/Homepage_Components/Decoration2'
import Servicequalities from './Components/Servicequalities'
import Footer from './Components/Footer'


function Home() {

  return (
    <>
      <Header />

      <Hero />
      <Brandcarousel />
      <Featuredproductcarousel />
      <Popularcategories />
      <Decoration1 />
      <Topsellingproductcarousel />
      <Decoration2 />
      <Servicequalities />

      <Footer />

    </>
  )
}

export default Home