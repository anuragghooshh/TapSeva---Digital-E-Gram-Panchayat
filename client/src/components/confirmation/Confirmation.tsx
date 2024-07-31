import React from 'react';
import Button from '../button/Button';

interface ConfirmationProps {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 fadeIn">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3 pop">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-primary">{title}</h2>
                </div>
                <div className="mt-4 text-dark">
                    <p>{message}</p>
                </div>
                <div className="grid grid-flow-col md:flex md:justify-end gap-3 mt-6">
                    <Button design='stroked' onClick={onCancel}>Cancel</Button>
                    <Button color='negative' onClick={onConfirm}>Confirm</Button>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
