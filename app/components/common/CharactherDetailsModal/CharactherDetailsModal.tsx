"use client"

import { Modal } from 'antd';
import { useEffect } from 'react';

interface IModalProps {
    open: boolean
    onClose: () => void
    title: string
    description: string
}


const CharactherDetailsModal = ({
    open,
    onClose,
    title,
    description,
}: IModalProps) => {

  
   
    return (
        <>
           
            <Modal
               footer={null}
                open={open}
                onCancel={onClose}
                 getContainer={false}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, ipsam? Fuga labore ea ducimus facilis, doloremque culpa, accusamus non dolore, laudantium enim id eum. Minus neque tempore odio ut eum?
              
               
            </Modal>
        </>
    )
}

export default CharactherDetailsModal