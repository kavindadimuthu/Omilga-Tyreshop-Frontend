import React from 'react'
import Footer from '../Components/Footer'
import Servicequalities from '../Components/Servicequalities'
// import Productlist from '../Components/Productlist'
import Header from '../Components/Header'
import Sitepath from '../Components/Sitepath'
import Sidecategorymenu from '../Components/Sidecategorymenu'
import Filtermenu from '../Components/Filtermenu'
import Paginationer from '../Components/Paginationer'

// import { createContext, useContext, useState } from 'react';

// Create the context
// const MyContext = createContext();
// export const MyContext = createContext();

function Productpage() {
  // const [value, setValue] = useState("");

  return (
    <>
    {/* <MyContext.Provider value={{ value, setValue }}> */}
      <Header />

      <Sitepath />

      <div className='mt-[20px] flex justify-center'>
        <div className='w-[75vw] flex gap-x-[1em]'>
          <div className='w-5vw'><Sidecategorymenu /></div>
          <div className=''>
            <Filtermenu/>
            {/* <Productlist /> */}
          </div>
        </div>
      </div>

      <Paginationer />

      <Servicequalities />

      <Footer />
    {/* </MyContext.Provider> */}
    </>
  )
}

export default Productpage