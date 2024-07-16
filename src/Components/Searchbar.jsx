import React, {useState, useEffect} from 'react';
import { Input, Select, Space } from 'antd';
import axios from 'axios';
import Productcard from './Productcard';

const { Search } = Input;
const options = [
  // {
  //   value: 'All products',
  //   label: 'All products',
  // },
  {
    value: 'bike',
    label: 'Motorbike',
  },
  {
    value: 'scooter',
    label: 'Scooter',
  },
  {
    value: 'threewheeler',
    label: 'Threewheel',
  },
  {
    value: 'bicycle',
    label: 'Bicycle',
  },
];

const onSearch = (value, _e, info) => console.log(info?.source, value);


const Searchbar = () => {

  const [selectedOption, setSelectedOption] = useState('All products');
  // const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const FilterByVehicleCategory = async () => {
      setLoading(true);
  
      try {
        const response = await axios.get('http://localhost:5000/api/tyre/filterTyres', {
          params: {
            vehicleCategory: selectedOption
          },
        });
  
        console.log('API Response:', response.data); 
  
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
  
    FilterByVehicleCategory();

  }, [selectedOption]);
  

  return (
    <div>
  <Space direction="vertical" size="middle">
    
    <Space.Compact>
      <Select defaultValue="All products" options={options} 
        onChange={(value) => setSelectedOption(value)}
      />
      <Search 
        placeholder="Search your product" 
        allowClear
        // size="small"
        onSearch={onSearch} 
        enterButton 
        // style={{
        //     width: 300,
          // }}
    />
    </Space.Compact>

  </Space>

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
        oldprice={product.oldPrice || null} // Assuming oldPrice is available, otherwise set to null
        tyreurl={`details/${product.tyreId}`} // Assuming there's a details page
      />
    </div>
  ))}
</div>
</div>


)};

export default Searchbar;