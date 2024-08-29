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
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios'; // Add axios for HTTP requests
import AdminHeader from '../../Components/AdminHeader';
const token = localStorage.getItem('token');


const { Option } = Select;

const props = {
  beforeUpload: (file) => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
      message.error(`${file.name} is not a png file`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

const selectAfter = (
  <Select defaultValue=".com">
    <Option value="mm">mm</Option>
    <Option value="other">other</Option>
  </Select>
);

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export default function Adminpage() {

  const onFinish = async (values) => {
    console.log('Received values:', values);
  
    const formData = new FormData();
    formData.append('tyreBrand', values.tyreBrand);
    formData.append('tyreWidth', values.tyreWidth);
    formData.append('profile', values.profile);
    formData.append('rimSize', values.rimSize);
    formData.append('tube', values.tube === 'true'); // Ensure tube is boolean
    formData.append('vehicleCategory', values.vehicleCategory);
    formData.append('makes', values.makes.join(',')); // Join array to comma-separated string
    formData.append('description', values.description);
    formData.append('oldPrice', values.oldPrice);
    formData.append('price', values.price);
    // Append files to formData
    if (values.mainImage && values.mainImage[0]) {
      formData.append('mainImage', values.mainImage[0].originFileObj);
    }
    if (values.secondImage && values.secondImage[0]) {
      formData.append('secondImage', values.secondImage[0].originFileObj);
    }
    if (values.thirdImage && values.thirdImage[0]) {
      formData.append('thirdImage', values.thirdImage[0].originFileObj);
    }

    // Log FormData contents
  for (let pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }
  
    try {
      const response = await axios.post('http://localhost:5000/api/tyre/addTyre', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        message.success('Data saved successfully');
      } else {
        message.error('Failed to save data');
      }
    } catch (error) {
      // Log error response details
      console.error('Error saving data:', 
        error.response ?
        error.response.data :
        error.message);
      message.error('Error saving data');
    }
    
  };
  

  

  return (
    <>
      <AdminHeader />

      <div className='my-4 mx-48 py-8 rounded-lg bg-slate-200 '>
      <Form
        onFinish={onFinish}
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
          label="Tyre Width"
          name="tyreWidth"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <InputNumber addonAfter={selectAfter} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Tyre Profile"
          name="profile"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <InputNumber addonAfter="%" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Rim Size"
          name="rimSize"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <InputNumber addonAfter="inches" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Tube/Tubeless"
          name="tube"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Select>
            <Option value="true">Tube</Option>
            <Option value="false">Tubeless</Option>
          </Select>
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

        <Form.Item
          label="Makes"
          name="makes"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Select mode="tags" style={{ width: '100%' }} placeholder="Enter makes">
          </Select>
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Old Price"
          name="oldPrice"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <InputNumber prefix="LKR" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="New Price"
          name="price"
          rules={[{ required: true, message: 'Please input!' }]}
        >
          <InputNumber prefix="LKR" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Main Image"
          name="mainImage"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload png only</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Second Image"
          name="secondImage"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload png only</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Third Image"
          name="thirdImage"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Upload png only</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>

    </>
  );
}
