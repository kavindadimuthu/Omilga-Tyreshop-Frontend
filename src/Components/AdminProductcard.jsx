import React, { useEffect } from 'react';
import { Button } from 'antd';
import { Padding } from '@mui/icons-material';
import axios from 'axios';


const AdminProductcard = (props) => {
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


  
  console.log(props.tyreid);
  // Extract the main image (first image) from the images array
  const mainImage = props.images && props.images.length > 0 ? props.images[0] : '';

  // Function to handle the deletion of the tyre
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://omilgatyreshop-backend.onrender.com/api/tyre/removeTyre/${props.tyreid}`);
      if (response.status === 200) {
        alert('Tyre deleted successfully');
        // Optionally, refresh the product list or remove the card from the UI
        if (props.onDeleteSuccess) {
          props.onDeleteSuccess();
        }
      }
    } catch (error) {
      alert('Failed to delete tyre');
      console.log("deleting error",error)
    }
  };

  return (
    <div style={containerStyle} className='rounded-[1em] overflow-hidden hover:scale-105 hover:shadow-lg hover:ring-1 hover:ring-[#f1f1f1]'>
      {/* <img src={props.image} alt="" style={imageStyle} /> */}
      {mainImage ? (
        <img src={mainImage} alt="Tyre Image" style={imageStyle} />
      ) : (
        <div className="flex items-center justify-center h-48 bg-gray-200">
          No Image Available
        </div>
      )}
      <div className='mt-2 py-2 px-4'>
        {/* <h1>Product ID : {props.tyreid}</h1> */}
        <h1 className='mt-[2px] font-bold text-[1.2em]'>{props.tyrename}</h1>
        <span>
          <h3 className='font-regular text-[1em] text-gray-600'>{props.tyreWidth}/{props.profile}-{props.rimSize} | {props.tube? 'Tube':'Tubeless'}</h3>
          <h4 className='font-bold text-[0.7em] text-gray-600'>{props.vehicleCategory}</h4>
        </span>
      </div>
      <div className='flex justify-between items-end py-3 px-3 bg-white rounded-b-[1em] border-2 border-[#f1f1f1]'>
        <span>
          <h2 className='text-[0.75em]'><s>Rs.{props.oldprice}</s></h2>
          <h2 className='font-medium text-red-400 text-[1.2em]'>Rs.{props.newprice}</h2>
        </span>
        <Button onClick={handleDelete} className='flex items-center justify-center p-[6%] bg-[#eb3d31] text-white font-semibold'>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default AdminProductcard;
