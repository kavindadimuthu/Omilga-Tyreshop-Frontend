import React, { useState, useEffect, useCallback } from 'react';
import { Input, Select, Space } from 'antd';
import axios from 'axios';
import debounce from 'lodash.debounce';
import Productcard from './Productcard';

import { createContext, useContext } from 'react';
import { MyContext } from '../main';

import { useNavigate } from 'react-router-dom';

const { Search } = Input;
const options = [
  { value: 'All products', label: 'All products' },
  { value: 'bike', label: 'Motorbike' },
  { value: 'scooter', label: 'Scooter' },
  { value: 'threewheeler', label: 'Threewheel' },
  { value: 'bicycle', label: 'Bicycle' },
];


const Searchbar = () => {

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('All products');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchProducts = async (query, category) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/tyre/filterByRegular', {
  //       params: {
  //         vehicleCategory: category !== 'All products' ? category : undefined,
  //         tyreBrand: query,
  //       },
  //     });
  //     if (response.data && Array.isArray(response.data.tyres)) {
  //       const productsWithImages = response.data.tyres.map((product) => {
  //         if (product.image && product.image.data) {
  //           const binaryData = new Uint8Array(product.image.data.data).reduce((data, byte) => data + String.fromCharCode(byte), '');
  //           const base64Image = `data:${product.image.contentType};base64,${btoa(binaryData)}`;
  //           return { ...product, image: base64Image };
  //         }
  //         return product;
  //       });
  //       // console.log(productsWithImages);
  //       setFilteredProducts(productsWithImages);
  //       // console.log(filteredProducts);
  //     } else {
  //       setError('Unexpected response format');
  //     }
  //   } catch (error) {
  //     console.error('Failed to fetch filtered tyres:', error);
  //     setError('Failed to fetch filtered tyres');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const debouncedFetchProducts = useCallback(debounce(fetchProducts, 1000), []);



  // useEffect(() => {
  //   debouncedFetchProducts(searchQuery, selectedOption);
  // }, [searchQuery, selectedOption, debouncedFetchProducts]);
  
  // useEffect(() => {
  //   console.log(filteredProducts);
  // }, [filteredProducts]);

  // const handleSearch = (e) => {
  //   setSearchQuery(inputvalue);
  //   e.preventDefault(); // Prevent default form submission behavior
  //   if (value1.trim()) { // Check if the query is not empty or whitespace
  //     navigate(`/products?search=${value1}`);
  //   }
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() || selectedOption.trim()) {
      const searchParams = new URLSearchParams();
      if (searchQuery.trim()) searchParams.append('search', searchQuery);
      if (selectedOption.trim()) searchParams.append('category', selectedOption);
      navigate(`/products?${searchParams.toString()}`);
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something"
      /> */}
        <Space direction="vertical" size="middle">
          <Space>
            <Select defaultValue="All products" options={options} onChange={(value) => {
              setSelectedOption(value);
              }} />
            <Search
              placeholder="Search your product"
              allowClear
              // onChange={(e) => setSearchQuery(e.target.value)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onPressEnter={handleSearch}
            />
          </Space>
        </Space>
        {/* {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <div className="grid grid-cols-4 gap-4 p-4">
          {filteredProducts.map((product, index) => (
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
                oldprice={product.oldPrice || null}
                tyreurl={`details/${product.tyreId}`}
              />
            </div>
          ))}
        </div> */}

      
    </div>
  );
};

export default Searchbar;