import React from 'react'
import UserDataInterface from '../../interfaces/UserDataInterface';
import { BiEdit } from 'react-icons/bi';
import { TbTrash } from 'react-icons/tb';
import Confirmation from '../confirmation/Confirmation';
import UserContext from '../../contexts/user/UserContext';

interface userCardProps {
    user: UserDataInterface,
    removeUser: () => void
}

const UserCard: React.FC<userCardProps> = ({ user }) => {
    const [isConfModalOpen, setIsConfModalOpen] = React.useState(false);
    const { setUsers } = React.useContext(UserContext);

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/updates/${user._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete update');
            }

            const result = await response.json();
            const newUsers = [...result];
            setUsers(newUsers);

            setIsConfModalOpen(false);

        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="p-6 bg-light-100 border-2 border-gray-100 rounded-lg h-full grid grid-flow-rown gap-10">
            <div className="space-y-4 font-work">
                <div className="flex flex-col md:flex-row md:space-x-2 items-start md:items-center">
                    <h3 className="text-lg md:text-xl font-medium text-primary truncate">{user.name}</h3>
                    <p className="text-sm md:text-lg text-secondary border border-secondary px-3 rounded-full capitalize mt-2 md:mt-0">
                        {user.role}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='md:col-span-2'>
                        <p className="text-base md:text-lg text-dark font-medium">
                            <span className="text-sm md:text-base  block text-neutral-500">User ID:</span> {user._id}
                        </p>
                    </div>
                    <div className='md:col-span-2'>
                        <p className="text-base md:text-lg text-dark font-medium">
                            <span className="text-sm md:text-base  block text-neutral-500">Email:</span> {user.email}
                        </p>
                    </div>
                    <div>
                        <p className="text-base md:text-lg text-dark font-medium">
                            <span className="text-sm md:text-base  block text-neutral-500">Phone:</span> {user.phone}
                        </p>
                    </div>
                    <div>
                        <p className="text-base md:text-lg text-dark font-medium">
                            <span className="text-sm md:text-base  block text-neutral-500">Aadhaar No:</span> {user.aadhaarNo}
                        </p>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <p className="text-base md:text-lg text-dark font-medium">
                            <span className="text-sm md:text-base  block text-neutral-500">Address:</span> {user.address}
                        </p>
                    </div>
                    <div>
                        <p className="text-base md:text-lg text-dark font-medium">
                            <span className="text-sm md:text-base  block text-neutral-500">Date of Birth:</span> {new Date(user.dob).toDateString()}
                        </p>
                    </div>
                    <div>
                        <p className="text-base md:text-lg text-dark font-medium">
                            <span className="text-sm md:text-base  block text-neutral-500">Sex:</span> {user.sex}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-end">
                <button
                    className="h-10 w-10 flex items-center justify-center bg-primary rounded-full text-white text-xl"
                    aria-label="Edit"
                >
                    <BiEdit />
                </button>
                <button
                    className="h-10 w-10 flex items-center justify-center bg-negative-400 rounded-full text-white text-xl"
                    aria-label="Delete"
                    onClick={() => setIsConfModalOpen(true)}
                >
                    <TbTrash />
                </button>
                <Confirmation
                    isOpen={isConfModalOpen}
                    title="Delete Update"
                    message="Are you sure you want to delete this update?"
                    onConfirm={handleDelete}
                    onCancel={() => setIsConfModalOpen(false)}
                />
            </div>
        </div>
    );
};

export default UserCard
