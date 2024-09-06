import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    key: 'sub1',
    label: 'Motorbike',
    icon: <img src="/icon/motorcycle.png" alt="Motorbike" style={{height:"22px", width:"22px"}}/>,
    url: '/products?category=bike',
  },

  {
    type: 'divider',
  },

  {
    key: 'sub2',
    label: 'Scooter',
    icon: <img src="/icon/scooter.png" alt="scooter" style={{height:"22px", width:"22px"}}/>,
    url: '/products?category=scooter',
  },

  {
    type: 'divider',
  },

  {
    key: 'sub3',
    label: 'Threewheel',
    icon: <img src="/icon/tuk-tuk.png" alt="tuk-tuk" style={{height:"22px", width:"22px"}}/>,
    url: '/products?category=threewheel',

  },

  {
    type: 'divider',
  },

  {
    key: 'sub4',
    label: 'Bicycle',
    icon: <img src="/icon/bicycle.png" alt="bicycle" style={{height:"22px", width:"22px"}}/>,
    url: '/products?category=bicycle',
    
  },
  
  {
    type: 'divider',
  },
  
  
];


  const Sidecategorymenu = () => {
    const navigate = useNavigate();
  
    const onClick = (e) => {
      const item = items.find(i => i.key === e.key);
      if (item && item.url) {
        navigate(item.url); // Navigate to the URL based on the clicked item
      }
    };

  
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 220,
        fontSize: '15px',
      }}
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Sidecategorymenu;