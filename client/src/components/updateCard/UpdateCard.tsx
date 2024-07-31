import React from 'react';
import { TbTrash } from 'react-icons/tb';
import Confirmation from '../confirmation/Confirmation';
import UpdateInterface from '../../interfaces/UpdateInterface';
import UpdateContext from '../../contexts/updates/UpdateContext';
import { useInView } from 'react-intersection-observer';

const UpdateCard: React.FC<UpdateInterface> = ({ update, date, _id }) => {
    const [isConfModalOpen, setIsConfModalOpen] = React.useState(false);
    const { setUpdates } = React.useContext(UpdateContext);
    const [ref, inView] = useInView({ threshold: 0.1 });


    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/updates/${_id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete update');
            }

            const result = await response.json();
            const newUpdates = [...result];
            setUpdates(newUpdates);

            setIsConfModalOpen(false);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div ref={ref} className={
            "p-5 bg-light-100 border-2 border-gray-100 rounded-lg transform transition-transform ease-bounce duration-200" +
            ` ${inView ? 'scale-100' : 'scale-90'}`
        }>
            <div className="flex flex-col space-y-4 font-work">
                <p className="text-base md:text-lg font-medium text-dark">
                    <span className="text-sm md:text-base block text-neutral-500">Update</span> {update}
                </p>
                <p className="text-base md:text-lg font-medium text-dark">
                    <span className="text-sm md:text-base block text-neutral-500">Created At</span> {new Date(date ?? "").toDateString()}
                </p>
            </div>
            <div className="flex gap-4 items-center justify-end">
                <button
                    className="h-10 w-10 flex items-center justify-center bg-negative-400 rounded-full text-light-100 text-xl"
                    aria-label="Delete"
                    onClick={() => { setIsConfModalOpen(true) }}
                >
                    <TbTrash />
                </button>
                <Confirmation
                    isOpen={isConfModalOpen}
                    title='Delete Update'
                    message='Are you sure you want to delete this update?'
                    onConfirm={handleDelete}
                    onCancel={() => { setIsConfModalOpen(false) }}
                />
            </div>
        </div>
    );
};

export default UpdateCard;