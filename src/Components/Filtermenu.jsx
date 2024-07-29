import React, { useState, useEffect, useCallback } from 'react';
import { Tabs, Button } from 'antd';
import Selectdropdown from './Selectdropdown';
import axios from 'axios';
import debounce from 'lodash.debounce';
import Productcard from './Productcard';

import { useContext } from 'react';
import { MyContext } from '../main';

import { useLocation } from 'react-router-dom';

const Filtermenu = () => {

  const location = useLocation();
  
  const [activeTabKey, setActiveTabKey] = useState('1');
  const [tyreWidthOptions, setTyreWidthOptions] = useState([]);
  const [tyreProfileOptions, setTyreProfileOptions] = useState([]);
  const [rimSizeOptions, setRimSizeOptions] = useState([]);
  const [selectedTyreWidth, setSelectedTyreWidth] = useState(null);
  const [selectedTyreProfile, setSelectedTyreProfile] = useState(null);
  const [selectedRimSize, setSelectedRimSize] = useState(null);
  const [selectedTubeType, setSelectedTubeType] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    // Declare state variables
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');



  

  const tabPaneStyle = {
    backgroundColor: '#333333',
    padding: '16px',
    borderRadius: '6px'
  };

  const selectBoxStyles = {
    marginTop: '1em',
    display: 'flex',
    columnGap: '1em',
  };

  const options4 = [
    { value: 'toyota', label: 'Toyota' },
    { value: 'honda', label: 'Honda' },
    { value: 'ford', label: 'Ford' },
  ];

  const options5 = [
    { value: 'corolla', label: 'Corolla' },
    { value: 'civic', label: 'Civic' },
    { value: 'focus', label: 'Focus' },
  ];

  const options6 = [
    { value: 'false', label: 'Tubeless' },
    { value: 'true', label: 'Tubed' },
  ];


  useEffect(() => {
    const fetchTyreWidths = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tyre/tyreWidths');
        const widths = response.data.map(width => ({ value: width, label: `${width}` }));
        setTyreWidthOptions(widths);
      } catch (error) {
        console.error('Failed to fetch tyre widths:', error);
      }
    };

    fetchTyreWidths();
  }, []);

  useEffect(() => {
    const fetchTyreProfiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tyre/tyreProfiles');
        const profiles = response.data.map(profile => ({ value: profile, label: `${profile}` }));
        setTyreProfileOptions(profiles);
      } catch (error) {
        console.error('Failed to fetch tyre profiles:', error);
      }
    };

    fetchTyreProfiles();
  }, []);

  useEffect(() => {
    const fetchRimSizes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tyre/rimSizes');
        const rimSizes = response.data.map(rimSize => ({ value: rimSize, label: `${rimSize}`}));
        setRimSizeOptions(rimSizes);
      } catch (error) {
        console.error('Failed to fetch rim sizes: ', error);
      }
    };

    fetchRimSizes();    
  }, []);


  const handleTabChange = (key) => {
    setActiveTabKey(key);
  };

  const handleFilterClick = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:5000/api/tyre/filterTyres', {
        params: {
          tyreWidth: selectedTyreWidth,
          profile: selectedTyreProfile,
          rimSize: selectedRimSize,
          tube: selectedTubeType,
        },
      });

      console.log('API Response:', response.data); 

      if (response.data && Array.isArray(response.data.tyres)) {
        const productsWithImages = response.data.tyres.map(product => {
          if (product.image && product.image.data) {
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
        setFilteredProducts(productsWithImages);
      } else {
        setError('Unexpected response format');
      }

      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch filtered tyres:', error);
      setError('Failed to fetch filtered tyres');
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFilterClick();
  }, []);


  const fetchProducts = async (query, category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/api/tyre/filterByRegular', {
        params: {
          vehicleCategory: category !== 'All products' ? category : undefined,
          tyreBrand: query,
        },
      });
      if (response.data && Array.isArray(response.data.tyres)) {
        const productsWithImages = response.data.tyres.map((product) => {
          if (product.image && product.image.data) {
            const binaryData = new Uint8Array(product.image.data.data).reduce((data, byte) => data + String.fromCharCode(byte), '');
            const base64Image = `data:${product.image.contentType};base64,${btoa(binaryData)}`;
            return { ...product, image: base64Image };
          }
          return product;
        });
        // console.log(productsWithImages);
        setFilteredProducts(productsWithImages);
        // console.log(filteredProducts);
      } else {
        setError('Unexpected response format');
      }
    } catch (error) {
      console.error('Failed to fetch filtered tyres:', error);
      setError('Failed to fetch filtered tyres');
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchProducts = useCallback(debounce(fetchProducts, 1000), []);

  useEffect(() => {
    debouncedFetchProducts(query, category);
  }, [query, category, debouncedFetchProducts]);


  useEffect(() => {
    // const params = new URLSearchParams(location.search);
    // const query = params.get('search');
    // const category = params.get('category');

    // Parse the query string
    const params = new URLSearchParams(location.search);
    
    // Extract parameters
    const queryParam = params.get('search');
    const categoryParam = params.get('category');

    // Update state
    setQuery(queryParam);
    setCategory(categoryParam);

    

  }, [location]);

  useEffect(() => {
    console.log(query);
    console.log(category);
  },[query, category])






  return (
    <div>
      {/* <p>{value1}</p> */}
      {/* <p>{value2}</p> */}
      <Tabs onChange={handleTabChange} type="card" activeKey={activeTabKey}>
        <Tabs.TabPane
          tab="FIND BY TYRE DIMENSIONS"
          key="1"
          style={tabPaneStyle}
        >
          <div>
            <span className='text-white text-[1.1em]'>Your path to the perfect set of tyres begins here</span>
            <div style={selectBoxStyles}>

            <Selectdropdown placeholder="Tubeless or tubed" options={options6} 
                onChange={(value) => {
                  setSelectedTubeType(value);
                  if (value === 'true') {
                    setSelectedTyreProfile(null);
                  }
                }} 
              />

              <Selectdropdown placeholder="Tire Width" options={tyreWidthOptions} 
                onChange={(value) => setSelectedTyreWidth(value)} 
              />

              {selectedTubeType !== "true" && (
              <Selectdropdown placeholder="Profile" options={tyreProfileOptions} 
                onChange={(value) => setSelectedTyreProfile(value)} 
              />
              )}
              
              <Selectdropdown placeholder="Rim Size" options={rimSizeOptions} 
                onChange={(value) => setSelectedRimSize(value)} 
              />
              
             
              <Button type="primary" className='bg-[#0055AA]' onClick={handleFilterClick}>Filter</Button>
              

            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab="FIND BY VEHICLE MODEL"
          key="2"
          style={tabPaneStyle}
        >
          <div>
            <span className='text-white text-[1.1em]'>Find the best tyres for your vehicle</span>
            <div style={selectBoxStyles}>
              <Selectdropdown placeholder="Make" options={options4} />
              <Selectdropdown placeholder="Model" options={options5} />
              <Button type="primary">Filter</Button>
            </div>
          </div>
        </Tabs.TabPane>
      </Tabs>

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div className='grid grid-cols-4 gap-4 p-4'>
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
              tyreurl={`singleproduct/${product.tyreId}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtermenu;
