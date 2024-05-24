import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Avatar, Card, Button } from 'antd';

const { Meta } = Card;
const Productcard = (props) => (
  <Card
    style={{
      width: '95%',
      backgroundColor: '#f1f1f1'
    }}
    cover={
      <img
        alt="example"
        src={props.image}
        style={{ width: '100%', aspectRatio: 1, objectFit: 'contain' }}
      />
    }
    actions={[
      <div className='flex px-[10px]'>
        <HeartOutlined key="Wishlist" className="flex-auto justify-center "/>
        <Button type="primary" className="w-fit p-0 flex-auto justify-center bg-[#0055aa]" >Get Quota</Button>
      </div>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={props.tyrename}
      description={props.description}
    />
  </Card>
);
export default Productcard;