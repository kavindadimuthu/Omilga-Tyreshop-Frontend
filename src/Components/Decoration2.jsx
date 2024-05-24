import React from 'react'
import Bgtyre from '/tyre-bg.jpg'

function Decoration2() {
  return (
    <div className='mt-[50px] h-[70vh] overflow-hidden flex justify-center items-center relative '>
      <img src={Bgtyre} alt="" className='w-[100%] absolute' />
      <div className='relative flex items-center w-[75vw] border-solid border-2 border-sky-500'>

        <div className='z-20 flex flex-col gap-y-[20px] bg-[#0055aa] p-[75px] text-white'>
          <h1 className='text-[20px] font-semibold'>CEAT PERFORMANCE</h1>
          <h2> These are suitable tyres for Bike Brand Model Names  <br />Get ready for the thrill with Zoom D
            radial tyres. <br />If you long for superior performance and <br />control at higher for you!
          </h2>
          <a href='/products' className='font-medium'>Go to products</a>
        </div>
      </div>

    </div>
  )
}

export default Decoration2