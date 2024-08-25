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

const { Option } = Select;

export default function DeleteTyre() {
  

  const removeTyre = async (values) => {
    console.log('Received values:', values);
  
    try {
      const response = await axios.delete('http://localhost:5000/api/tyre/removeTyre', {
        headers: {
          'Content-Type': 'application/json',
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

      <Form
        onFinish={removeTyre}
        style={{ maxWidth: '70vw', margin: 'auto' }}
      >
        <Form.Item
          label="Tyre Brand"
          name="tyreBrand"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input />
        </Form.Item>
       

        <Form.Item
          label="Vehicle Category"
          name="vehicleCategory"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Select>
            <Option value="Motorbike">Motorbike</Option>
            <Option value="Scooter">Scooter</Option>
            <Option value="Threewheel">Threewheel</Option>
            <Option value="Bicycle">Bicycle</Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </>
  );
}
