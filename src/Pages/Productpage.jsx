import React from 'react'
import { useState } from 'react'
import Footer from '../Components/Footer'
import Servicequalities from '../Components/Servicequalities'
import Productlist from '../Components/Productlist'
import Header from '../Components/Header'
import Sitepath from '../Components/Sitepath'
import Sidecategorymenu from '../Components/Sidecategorymenu'
import Filtermenu from '../Components/Filtermenu'
import Paginationer from '../Components/Paginationer'
import { Tabs, Button } from 'antd';
import { Link } from 'react-router-dom';



function Productpage() {
    // const [activeTabKey, setActiveTabKey] = useState('1');

    
    // const handleTabChange = (key) => {
    //     setActiveTabKey(key);
    //   };
      
    // const tabPaneStyle = {
    //     backgroundColor: '#333333',
    //     padding: '16px',
    //     borderRadius: '6px'
    //   };


  return (
    <>
      <Header />

      <Sitepath />

      


      <div className='mt-[20px] flex justify-center'>



        <div className='w-[75vw] flex gap-x-[1em]'>
          {/* <div className='w-5vw'><Sidecategorymenu /></div> */}
          <div className=''>
            {/* <Filtermenu/> */}
            
            <Link to="/filter">
            <Button type="primary" className='bg-[#0055AA]' LinkTo="/filter">FIND BY TYRE DIMENSION</Button>
            </Link>
            
            <Productlist />
          </div>
        </div>
      </div>

      <Paginationer />

      <Servicequalities />

      <Footer />

    </>
  )
}

export default Productpage