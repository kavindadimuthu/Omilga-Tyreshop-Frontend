import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Productcard from './Productcard';

function Productlist() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://omilgatyreshop-backend.onrender.com/api/tyre/allTyres/');
        
        console.log('API Response:', response.data); // Log the response for debugging

        if (response.data && Array.isArray(response.data.tyres)) {
          const productsWithImages = response.data.tyres.map(product => {
            if (product.image && product.image.data) {
              // Convert binary data to base64 string
              const binaryData = new Uint8Array(product.image.data.data).reduce((data, byte) => {
                return data + String.fromCharCode(byte);
              }, '');
              const base64Image = `data:${product.image.contentType};base64,${btoa(binaryData)}`;

              return {
                ...product,
                image: base64Image
              };
            }
            return product;
          });
          setProducts(productsWithImages); // Extract the 'tyres' array with base64 images
        } else {
          setError('Unexpected response format');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error); // Log the error
        setError('Error fetching product data');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      {products.map((product, index) => (
        <div key={index}>
          <Productcard 
            tyrename={product.tyreBrand} 
            image={product.image} 
            tyreWidth={product.tyreWidth}
            profile={product.profile}
            rimSize={product.rimSize} 
            tube={product.tube} 
            vehicleCategory={product.vehicleCategory}
            newprice={product.price}
            oldprice={product.oldPrice || null} // Assuming oldPrice is available, otherwise set to null
            tyreurl={`singleproduct/${product.tyreId}`} // Assuming there's a details page
          />
        </div>
      ))}
    </div>
  );
}

export default Productlist;
