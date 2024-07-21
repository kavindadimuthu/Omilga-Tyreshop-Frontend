import React from 'react'
import {
  Button,
  Form,
  Input,
  InputNumber,
  Mentions,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {  message, Upload } from 'antd';
import Header from '../Components/Header'

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

export default function Adminpage() {

  return (
    <>
    <Header />
    <div>Adminpage</div>

    <Form variant="filled" style={{ maxWidth: "70vw" , margin: "auto" }}>

    <Form.Item label="Tyre Brand" name="TyreBrand" rules={[{ required: true, message: 'Please input!' }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Tyre Width" name="TyreWidth" rules={[{ required: true, message: 'Please input!' }]}>
      <InputNumber addonAfter="mm" style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="Tyre Profile" name="TyreProfile" rules={[{ required: true, message: 'Please input!' }]}>
      <InputNumber  addonAfter="%" style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="Rim Size" name="RimSize" rules={[{ required: true, message: 'Please input!' }]}>
      <InputNumber addonAfter="inches" style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="Makes" name="Makes" rules={[{ required: true, message: 'Please input!' }]}>
      <Mentions />
    </Form.Item>

    <Form.Item
      label="Description" name="Description" rules={[{ required: true, message: 'Please input!' }]}>
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="Specification" name="Specification" rules={[{ required: false }]}>
      <Input.TextArea />
    </Form.Item>

    <Form.Item label="Old Price" name="OldPrice" rules={[{ required: true, message: 'Please input!' }]}>
      <InputNumber prefix="LKR" style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="New Price" name="NewPrice" rules={[{ required: true, message: 'Please input!' }]}>
      <InputNumber prefix="LKR" style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item label="Main Image" >
      <Upload {...props}><Button icon={<UploadOutlined />}>Upload png only</Button></Upload>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
    
    </Form>
    </>
  )
}