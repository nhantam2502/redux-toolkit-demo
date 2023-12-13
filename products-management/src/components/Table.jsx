import React, {useState} from 'react';
import { Space, Table, Modal, Form, Input, InputNumber } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../redux/Slices/ProductSlice';

export default function TableDashBoard({ dataSource }) {

    const dispatch = useDispatch();

    const [form] = Form.useForm();

    // manage the visibility of the edit modal.
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editedProduct, setEditedProduct] = useState(null);

    const handleEdit = (record) => {
        setEditedProduct(record);
        setEditModalVisible(true);
        form.setFieldsValue(record);
    };

    const handleEditSubmit = () => {
        form.validateFields().then((values) => {
            dispatch(updateProduct({ id: editedProduct.id, updatedProduct: values }));
            setEditModalVisible(false);
            setEditedProduct(null);
        });
    };

    const handleEditCancel = () => {
        setEditModalVisible(false);
        setEditedProduct(null);
    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Price $',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <EditOutlined onClick={() => handleEdit(record)} />
                    <DeleteOutlined style={{ color: "red" }} onClick={() => handleDelete(record.id)} />
                </Space>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={dataSource} />

            {/* Edit Product Modal */}
            <Modal
                title="Edit Product"
                visible={editModalVisible}
                onOk={handleEditSubmit}
                onCancel={handleEditCancel}
            >
                <Form
                    form={form}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={handleEditSubmit}
                >
                    <Form.Item label="Product name" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Image" name="image">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Category" name="category">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Price" name="price">
                        <InputNumber min={1} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}