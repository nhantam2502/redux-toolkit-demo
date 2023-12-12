import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import AddForm from './AddForm';

const ModalButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Add new product
            </Button>

            <Modal
                title="Add new product"
                open={isModalOpen}
                onOk={handleOk}
                width={500}
            >
                <AddForm/>
            </Modal>
        </div>
    );
};
export default ModalButton;