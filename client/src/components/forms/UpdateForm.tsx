import React from 'react'
import Modal from '../modal/Modal'
import Button from '../button/Button'
import InputAndLabel from '../inputAndLabel/InputAndLabel';
import UpdateContext from '../../contexts/updates/UpdateContext';
import { BiAddToQueue } from 'react-icons/bi';

const UpdateForm = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [update, setUpdate] = React.useState('');
    const { setUpdates } = React.useContext(UpdateContext);

    const validate = () => {
        if(update === ''){
            setError(true);
            return false;
        }
        setError(false);
        return true;
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUpdate(event.target.value);
    }

    const handleSubmit = async(event: React.FormEvent) => {
        event.preventDefault();

        if(!validate()){
            return;
        }

        const postData = {
            update : update,
        }

        try{
            const response = await fetch('/api/updates/new', {
                headers:{
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(postData),
            });

            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit form');
            }

            const result = await response.json();
            const newUpdates = [...result];
            setUpdates(newUpdates);
            close();
        } catch (error) {
            console.error(error);
        }            
    }

    const clear = () => {
        setUpdate('');
    }

    const close = () => {
        setIsModalOpen(false);
        clear();
    }

    return (
        <div>
            <button className='w-14 h-14 fixed bottom-10 right-5 bg-primary shadow-md text-light-100 text-lg grid place-items-center rounded-full ease-bounce duration-200 button' onClick={() => setIsModalOpen(true)} color='color'>
                <BiAddToQueue/>
            </button>
            <Modal isOpen={isModalOpen}>
                <form className='w-full space-y-10 py-5' onSubmit={handleSubmit}>
                    <InputAndLabel required>
                        <InputAndLabel.Label htmlFor='update'>Update</InputAndLabel.Label>
                        <InputAndLabel.TextArea
                            placeholder='Enter Update'
                            id='update'
                            name='update'
                            required={true}
                            value={update}
                            onChange={handleChange}
                        />
                        {error && <p className="font-work text-negative-400 text-sm lg:text-base">Required</p>}
                    </InputAndLabel>
                    <div className='grid grid-cols-1 w-full flex-wrap md:flex justify-end gap-3'>
                        <Button design='stroked' onClick={close}>Cancel</Button>
                        <Button color='dark' type='submit'>Post Update</Button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default UpdateForm
