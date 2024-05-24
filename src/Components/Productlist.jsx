import React from 'react'
import Productcard from './Productcard'
import products from '../data/products.json';

function Productlist() {
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      {products.map((product, index) => (
        <div key={index} >
          <Productcard tyrename={product.tyrename} image={product.image} description={product.description} />
        </div>
      ))}
    </div>
  )
}

export default Productlist