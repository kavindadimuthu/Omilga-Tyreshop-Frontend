import React from 'react';
import { Select } from 'antd';

const Selectdropdown = (props) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    props.onChange(value); // Use the onChange handler passed from the parent component
  };

  const handleSearch = (value) => {
    console.log('search:', value);
  };

  // Filter `option.label` to match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <Select
      showSearch
      allowClear
      placeholder={props.placeholder}
      optionFilterProp="children"
      onChange={handleChange}
      onSearch={handleSearch}
      filterOption={filterOption}
      options={props.options}
    />
  );
};

export default Selectdropdown;
