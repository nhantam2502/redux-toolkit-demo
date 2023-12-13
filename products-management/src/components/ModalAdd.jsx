import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import AddForm from './AddForm';

const ModalAdd = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={{ marginBottom: 10, marginTop: 10 }}>
            <Button type='primary' onClick={showModal}>
                Add new product
            </Button>

            <Modal
                title="Add new product"
                visible={isModalOpen}
                onCancel={handleCancel}
                width={500}
                footer={null}
            >
                <AddForm onClose={handleOk}/>
            </Modal>
        </div>
    );
};
export default ModalAdd;