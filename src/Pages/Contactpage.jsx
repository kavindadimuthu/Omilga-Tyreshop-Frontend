import React from 'react'
import Contactform from '../Components/Contact-form'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Contactdetailandmapbox from '../Components/Contactdetailandmapbox'

function Contactpage() {
  return (
    <div>
        <Header/>

        <Contactdetailandmapbox/>
        <Contactform/>
        
        <Footer/>
    </div>
  )
}

export default Contactpage