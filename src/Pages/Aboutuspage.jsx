import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Aboutsections from '../Components/Aboutsections'

function Aboutuspage() {
  return (
    <div>
        <Header/>

        <h1 className='text-center font-bold text-[2em] leading-[3em]'>About Us</h1>
        <Aboutsections/>
        
        <Footer/>
    </div>
  )
}

export default Aboutuspage