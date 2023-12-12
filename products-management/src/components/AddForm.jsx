import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

const onFinish = (values) => {
    required = true;
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const onChange = (value) => {
    console.log('changed', value);
}

const AddForm = () => (
    <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            maxWidth: 600,
        }}

        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <Form.Item
            label="Product name"
            name="productname"
            rules={[
                {
                    required: true,
                    message: 'Please input Product name!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Image"
            name="image"
            rules={[
                {
                    required: true,
                    message: 'Please input link of image!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Category"
            name="category"
            rules={[
                {
                    required: true,
                    message: 'Please input the category of product',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Price"
            name="price"
            rules={[
                {
                    required: true,
                    message: 'Please input the price of product',
                },
            ]}
        >
            <InputNumber min={1} onChange={onChange}/>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Add
            </Button>
        </Form.Item>
    </Form>
);
export default AddForm;