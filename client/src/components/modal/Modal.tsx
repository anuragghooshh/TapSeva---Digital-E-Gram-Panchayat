import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50 fadeIn">
            <div className="relative w-11/12 md:w-1/3 p-6 bg-white rounded-lg shadow-lg pop">
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
