import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    key: 'sub1',
    label: 'Motorbike',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Tyres',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'Tubeless Tyres',
          },
          {
            key: '2',
            label: 'Tubed Tyres',
          },
        ],
      },
      {
        key: 'g2',
        label: 'Tubes',
        type: 'group',
        children: [
          {
            key: '3',
            label: 'Motorbike Tubes',
          },
        ],
      },
    ],
  },

  {
    type: 'divider',
  },

  {
    key: 'sub2',
    label: 'Scooter',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Tyres',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'Tubeless Tyres',
          },
          {
            key: '2',
            label: 'Tubed Tyres',
          },
        ],
      },
      {
        key: 'g2',
        label: 'Tubes',
        type: 'group',
        children: [
          {
            key: '3',
            label: 'Scooter Tubes',
          },
        ],
      },
    ],
  },

  {
    type: 'divider',
  },

  {
    key: 'sub3',
    label: 'Threewheel',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Tyres',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'Tubeless Tyres',
          },
          {
            key: '2',
            label: 'Tubed Tyres',
          },
        ],
      },
      {
        key: 'g2',
        label: 'Tubes',
        type: 'group',
        children: [
          {
            key: '3',
            label: 'Threewheel Tubes',
          },
        ],
      },
    ],
  },

  {
    type: 'divider',
  },

  {
    key: 'sub4',
    label: 'Bicycle',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Tyres',
        type: 'group',
        children: [
          {
            key: '1',
            label: 'Tubeless Tyres',
          },
          {
            key: '2',
            label: 'Tubed Tyres',
          },
        ],
      },
      {
        key: 'g2',
        label: 'Tubes',
        type: 'group',
        children: [
          {
            key: '3',
            label: 'Bicycle Tubes',
          },
        ],
      },
    ],
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
        width: 256,
      }}
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default Sidecategorymenu;