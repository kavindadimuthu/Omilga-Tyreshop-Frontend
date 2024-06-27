import React from 'react'
import Productcard from '../Components/Productcard'

import products from '../data/products.json';

function Productlist() {
  let tyreurl = null;

  return (
    <div className='grid grid-cols-4 gap-4 py-4'>
      {products.map((product, index) => (
        <div key={index} >
          {tyreurl = "singleproduct/"+ product.tyreid}
          <Productcard tyreurl={tyreurl} tyreid={product.tyreid} tyrename={product.tyrename} image={product.image} sizeinfo={product.sizeinfo} oldprice={product.oldprice} newprice={product.newprice}/>
        </div>
      ))}
    </div>
  )
}

export default Productlist