import React from 'react'
import Footer from '../Components/Footer'
import Servicequalities from '../Components/Servicequalities'
import Productlist from '../Components/Productlist'
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
          <Sidecategorymenu />
          <div className=''>
            <Filtermenu/>
            <Productlist />
          </div>
        </div>
      </div>



      <Servicequalities />

      <Footer />

    </>
  )
}

export default Productpage