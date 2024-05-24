import React from 'react';
import { Input, Select, Space } from 'antd';
const { Search } = Input;
const options = [
  {
    value: 'All products',
    label: 'All products',
  },
  {
    value: 'Motorbike',
    label: 'Motorbike',
  },
  {
    value: 'Scooter',
    label: 'Scooter',
  },
  {
    value: 'Threewheel',
    label: 'Threewheel',
  },
  {
    value: 'Bicycle',
    label: 'Bicycle',
  },
];

const onSearch = (value, _e, info) => console.log(info?.source, value);
const Searchbar = () => (
  <Space direction="vertical" size="middle">
    
    <Space.Compact>
      <Select defaultValue="All products" options={options} />
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
);
export default Searchbar;