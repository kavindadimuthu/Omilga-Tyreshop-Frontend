import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

const Sitepath = () => (
  <div className='mt-[30px] flex justify-center'>
    <div className='w-[75vw] border-solid border-b-2 border-gray-400'>
      <h1 className='font-bold text-[1.5em] text-gray-900'>PRODUCTS</h1>
      <Breadcrumb
        items={[
          {
            href: '/',
            title: <HomeOutlined />,
          },
          {
            title: 'Products',
          },
        ]}
      />
    </div>
  </div>
);

export default Sitepath;