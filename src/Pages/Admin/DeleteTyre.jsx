import React from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
} from 'antd';
import axios from 'axios'; // Add axios for HTTP requests
import AdminHeader from '../../Components/AdminHeader';
import AdminFiltermenu from '../../Components/AdminFiltermenu';
const token = localStorage.getItem('token');


const { Option } = Select;

export default function DeleteTyre() {
  

  const removeTyre = async (values) => {
    console.log('Received values:', values);
  
    try {
      const response = await axios.delete('https://omilgatyreshop-backend.onrender.com/api/tyre/removeTyre', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        data: {
          tyreBrand: values.tyreBrand,
          vehicleCategory: values.vehicleCategory
        }
      });
  
      if (response.status === 200) {
        message.success('Data removed successfully');
      } else {
        message.error('Failed to remove data');
      }
    } catch (error) {
      console.error('Error removing data:', 
        error.response ? error.response.data : error.message);
      message.error('Error removing data');
    }
  };
  

  

  return (
    <>
      <AdminHeader />

      <div className='w-[85vw] px-[5vw] py-4 mx-auto my-4 bg-slate-200 rounded-xl'><AdminFiltermenu /></div>

      

    </>
  );
}
