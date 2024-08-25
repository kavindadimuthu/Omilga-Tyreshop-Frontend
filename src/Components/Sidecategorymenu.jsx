import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {motorcycle} from '../assets/motorcycle.png';
import {scooter} from '../assets/scooter.png';
import {tuk} from '../assets/tuk-tuk.png';
import {bicycle} from '../assets/bicycle.png';

const items = [
  {
    key: 'sub1',
    label: 'Motorbike',
    icon: <img src={motorcycle} alt="Motorbike" />,
    url: '/products?category=bike',
  },

  {
    type: 'divider',
  },

  {
    key: 'sub2',
    label: 'Scooter',
    icon: <img src={scooter} alt="scooter" />,
    url: '/products?category=scooter',
  },

  {
    type: 'divider',
  },

  {
    key: 'sub3',
    label: 'Threewheel',
    icon: <img src={tuk} alt="threewheeler" />,
    url: '/products?category=threewheel',

  },

  {
    type: 'divider',
  },

  {
    key: 'sub4',
    label: 'Bicycle',
    icon: <img src={bicycle} alt="bicycle" />,
    url: '/products?category=bicycle',
    
  },
  
  {
    type: 'divider',
  },
  
  
];
// const Sidecategorymenu = () => {
//   const onClick = (e) => {
//     console.log('click ', e);
//   };


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
        fontSize: '15px'
      }}
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Sidecategorymenu;