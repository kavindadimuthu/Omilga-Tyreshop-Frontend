import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    key: 'sub1',
    label: 'Motorbike',
    icon: <MailOutlined />,
    url: '/products?category=bike',
  },

  {
    type: 'divider',
  },

  {
    key: 'sub2',
    label: 'Scooter',
    icon: <MailOutlined />,
    url: '/products?category=scooter',
  },

  {
    type: 'divider',
  },

  {
    key: 'sub3',
    label: 'Threewheel',
    icon: <MailOutlined />,
    url: '/products?category=threewheel',

  },

  {
    type: 'divider',
  },

  {
    key: 'sub4',
    label: 'Bicycle',
    icon: <MailOutlined />,
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