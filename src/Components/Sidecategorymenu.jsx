import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    key: 'sub1',
    label: 'Motorbike',
    icon: <MailOutlined />,
  },

  {
    type: 'divider',
  },

  {
    key: 'sub2',
    label: 'Scooter',
    icon: <MailOutlined />,
  },

  {
    type: 'divider',
  },

  {
    key: 'sub3',
    label: 'Threewheel',
    icon: <MailOutlined />,

  },

  {
    type: 'divider',
  },

  {
    key: 'sub4',
    label: 'Bicycle',
    icon: <MailOutlined />,
    
  },
  
  {
    type: 'divider',
  },
  
  
];
const Sidecategorymenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
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