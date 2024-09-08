import React from 'react'

import Rollingtyre from '/rolling-tyre.webp'

function Decoration1() {
  return (
    <div className='decoration1-container mt-[50px] flex justify-center '>
      <div className='w-[75vw] flex justify-between '>
        <img src={Rollingtyre} alt="Rollingtyre" width="35%" />
        <div className='flex flex-col justify-center'>
          <h3 className='font-medium text-[30px]'>Knowledge</h3>
          <h1 className='font-bold text-[50px]'>LEARN THINGS ABOUT VEHICLES</h1>
          <h2 className='mt-[20px] font-semibold text-[36px]'>INNOVATING FOR A SAFER, SMARTER TOMORROW.</h2>
          <p className=' text-[24px]'>The customer focus is continually sustained, to achieve targeted <br />Quality parameters with
            the highest impact on Customer satisfaction.</p>
          <a href="#Knowledge" className='mt-[20px] font-medium underline text-[24px]'>Read more about knowledge</a>
        </div>

      </div>
    </div>

  )
}

export default Decoration1