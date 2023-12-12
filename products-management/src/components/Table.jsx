import React from 'react';
import { Space, Table } from 'antd';

export default function TableDashBoard({ dataSource }) {
    const columns = [
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
            render: () => (
                <Space size="middle">
                    <a>Update</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={dataSource} />
    );
}







