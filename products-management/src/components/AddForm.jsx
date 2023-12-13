import React, { useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/Slices/ProductSlice';
import { toast } from "react-toastify";

function AddForm ({onClose}) {

    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        // Dispatch the createProduct action with the form values
        dispatch(createProduct(values));

        // Reset the form fields after dispatching the action
        form.resetFields();

        // Close the Modal
        onClose();
        toast.success("New product has been added successfully");
    };

    return (
        <Form
            labelCol={{
                span: 6
            }}
            wrapperCol={{
                span: 16,
            }}
            id='myForm'
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                label="Product name"
                name="name"
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
                <InputNumber min={1} />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 6,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Add
                </Button>
            </Form.Item>
        </Form>
    )
}
export default AddForm;