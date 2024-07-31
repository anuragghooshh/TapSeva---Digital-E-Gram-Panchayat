import React from 'react';
import Button from '../../button/Button';
import ServiceStep1 from './ServiceStep1';
import ServiceStep2 from './ServiceStep2';
import Modal from '../../modal/Modal';
import ServiceInterface from '../../../interfaces/ServiceInterface';
import ServiceContext from '../../../contexts/service/ServiceContext';
import { GrChapterAdd } from 'react-icons/gr';

const ServiceForm = () => {
    const { setServices } = React.useContext(ServiceContext);

    const [input, setInput] = React.useState<ServiceInterface>({
        _id: '',
        service_name: '',
        description: '',
        DownloadableForm: '',
        category: '',
        featured: false,
        applicants: 0,
    });

    const [step, setStep] = React.useState(1);
    const [errors, setErrors] = React.useState({});
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const clear = () => {
        setInput({
            _id: '',
            service_name: '',
            description: '',
            DownloadableForm: '',
            category: '',
            featured: false,
            applicants: 0,
        });
    };

    const validate = () => {
        let newErrors = {} as any;

        if (!input.service_name) newErrors.service_name = 'Service name is required';
        if (!input.description) newErrors.description = 'Description is required';
        if (!input.category) newErrors.category = 'Category is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const close = () => {
        setIsModalOpen(false);
        setStep(1);
        clear();
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!validate()) return;

        const postData = {
            ...input,
            featured: false,
            applicants: 0,
        };

        try {
            const response = await fetch('/api/services/new', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit form');
            }

            const result = await response.json();
            const newServices = [...result];
            setServices(newServices);

            close();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const nextStep = () => {
        if (validateStep(step)) setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const validateStep = (currentStep: number) => {
        let newErrors = {} as any;

        if (currentStep === 1) {
            if (!input.service_name) newErrors.service_name = 'Service name is required';
            if (!input.description) newErrors.description = 'Description is required';
        }

        if (currentStep === 2) {
            if (!input.category) newErrors.category = 'Category is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <div>
            <button className='w-14 h-14 fixed bottom-10 right-5 bg-primary shadow-md text-light-100 text-lg grid place-items-center rounded-full ease-bounce duration-200 button' onClick={() => setIsModalOpen(true)} color='color'>
                <GrChapterAdd/>
            </button>

            <Modal isOpen={isModalOpen}>
                <form className='w-full space-y-10 py-5' onSubmit={handleSubmit}>
                    {step === 1 && <ServiceStep1 input={input} handleChange={handleChange} errors={errors} />}
                    {step === 2 && <ServiceStep2 input={input} handleChange={handleChange} errors={errors} />}

                    <div className='grid grid-cols-1 w-full flex-wrap md:flex justify-end gap-3'>
                        <Button design='stroked' onClick={close}>Cancel</Button>
                        {step > 1 && <Button design='stroked' onClick={prevStep}>Previous</Button>}
                        {step < 2 && <Button color='dark' onClick={nextStep}>Next</Button>}
                        {step === 2 && <Button color='dark' type='submit'>Create Service</Button>}
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default ServiceForm;