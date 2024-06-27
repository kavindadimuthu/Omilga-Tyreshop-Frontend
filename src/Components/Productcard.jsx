import React from 'react';
import { Button } from 'antd';
import { Padding } from '@mui/icons-material';

const Productcard = (props) => {
  const containerStyle = {
    width: "100%",
    backgroundColor: "#f1f1f1",
    borderRadius: "1em",
    overflow: "hidden",
    transition: "transform 1s ease, box-shadow 0.3s ease, border-color 0.3s ease"
  };

  const imageStyle = {
    width: '70%',
    height: "auto",
    margin: "auto",
    padding: "0.5em",
    objectFit: "contain",
  };

  return (
    <div style={containerStyle} className='rounded-[1em] overflow-hidden hover:scale-105 hover:shadow-lg hover:ring-1 hover:ring-[#f1f1f1]'>
      <img src={props.image} alt="" style={imageStyle} />
      <div className='mt-2 py-2 px-4'>
        {/* <h1>Product ID : {props.tyreid}</h1> */}
        <h1 className='mt-[2px] font-bold text-[1.25em]'>{props.tyrename}</h1>
        <span className='font-regular text-[0.9em] text-gray-600'>{props.sizeinfo}</span>
      </div>
      <div className='flex justify-between items-end py-4 px-4 bg-white rounded-b-[1em] border-2 border-[#f1f1f1]'>
        <span>
          <h2 className='text-[0.75em]'><s>Rs.{props.oldprice}</s></h2>
          <h2 className='font-medium text-red-400 text-[1.1em]'>Rs.{props.newprice}</h2>
        </span>
        <Button href={props.tyreurl} className='flex items-center justify-center p-[6%] bg-[#0055aa] text-white font-semibold'>
          See Details
        </Button>
      </div>
    </div>
  );
};

export default Productcard;
