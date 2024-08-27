import React from 'react'
import Footer from '../Components/Footer'
import Servicequalities from '../Components/Servicequalities'
import Header from '../Components/Header'
import Sitepath from '../Components/Sitepath'
import Sidecategorymenu from '../Components/Sidecategorymenu'
import Filtermenu from '../Components/Filtermenu'


function Productpage() {

  return (
    <>
      <Header />

      <Sitepath />

      <div className='mt-[20px] flex justify-center'>
        <div className='w-[75vw] flex gap-x-[1em]'>
          <div className='w-5vw'><Sidecategorymenu /></div>
          <div className=''>
            <Filtermenu/>
          </div>
        </div>
      </div>

      

      <Servicequalities />

      <Footer />
    </>
  )
}

export default Productpage