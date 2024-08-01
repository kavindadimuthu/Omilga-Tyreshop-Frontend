import React, { useState } from 'react';
import { Input, Select, Space } from 'antd';

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

  const handleSearch = (e) => {
    if (searchQuery.trim() || selectedOption.trim()) {
      const searchParams = new URLSearchParams();
      if (searchQuery.trim()) searchParams.append('search', searchQuery);
      if (selectedOption.trim()) searchParams.append('category', selectedOption);
      navigate(`/products?${searchParams.toString()}`);
    }
  };

  return (
    <div>
        <Space direction="vertical" size="middle">
          <Space>
            <Select 
              defaultValue="All products" 
              options={options} 
              onChange={(value) => {setSelectedOption(value);}} 
            />
            <Search
              placeholder="Search your product"
              allowClear
              onChange={(e) => setSearchQuery(e.target.value)}
              onSearch={handleSearch}  
            />
          </Space>
        </Space>

    </div>
  );
};

export default Searchbar;