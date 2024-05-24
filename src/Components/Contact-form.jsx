import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const Contactform = () => (
  <div className='contactform-container mt-[50px] flex justify-center'>
    <div className='contactform-wrapper w-[75vw] flex flex-col items-center gap-y-[2em]'>
      <h1 className='font-semibold text-[1.3em]'>Send Us Your Message</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{
          width: "100%",
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          name={['user', 'subject']} 
          label="Subject"
        >
          <Input />
        </Form.Item>
        <Form.Item 
          name={['user', 'message']} 
          label="Message" 
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>

);
export default Contactform;