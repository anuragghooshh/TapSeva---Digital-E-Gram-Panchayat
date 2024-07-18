import React from 'react'
import Button from '../../button/Button'
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import SignUp3 from './SignUp3';

export interface SignUpProps {
    input: {
        name: string,
        dob: string,
        address: string,
        maritalStatus: string,
        aadhaarNo: string,
        email: string,
        phone: string,
        password: string,
        confirmPassword: string,
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const SignUpForm = () => {
    const [input, setInput] = React.useState({
        name: '',
        dob: '',
        address: '',
        maritalStatus: '',
        aadhaarNo: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [step, setStep] = React.useState(1);
    const [errors, setErrors] = React.useState({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
        console.log({
            ...input,
            [event.target.name]: event.target.value,
        })
    };

    const clear = () => {
        setInput({
            name: '',
            dob: '',
            address: '',
            maritalStatus: '',
            aadhaarNo: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!input.name) newErrors.name = 'Name is required';
        if (!input.dob) newErrors.dob = 'Date of Birth is required';
        if (!input.address) newErrors.address = 'Address is required';
        if (!input.maritalStatus) newErrors.maritalStatus = 'Marital status is required';
        if (!input.aadhaarNo || !/^\d{12}$/.test(input.aadhaarNo)) newErrors.aadhaarNo = 'Aadhaar number must be 12 digits';
        if (!input.email || !/\S+@\S+\.\S+/.test(input.email)) newErrors.email = 'Email is invalid';
        if (!input.phone || !/^\d{10}$/.test(input.phone)) newErrors.phone = 'Phone number must be 10 digits';
        if (!input.password || input.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (input.password !== input.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!validate()) return;

        const postData = new Object() as any;

        postData.name = input.name;
        postData.dob = input.dob;
        postData.address = input.address;
        postData.maritalStatus = input.maritalStatus;
        postData.aadhaarNo = input.aadhaarNo;
        postData.email = input.email;
        postData.phone = input.phone;
        postData.password = input.password;

        try {
            console.log(postData)
            const response = await fetch('/api/auth/signup', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const validateStep = (currentStep) => {
        let newErrors = {};

        if (currentStep === 1) {
            if (!input.name) newErrors.name = 'Name is required';
            if (!input.dob) newErrors.dob = 'Date of Birth is required';
            if (!input.address) newErrors.address = 'Address is required';
            if (!input.maritalStatus) newErrors.maritalStatus = 'Marital status is required';
        }

        if (currentStep === 2) {
            if (!input.aadhaarNo || !/^\d{12}$/.test(input.aadhaarNo)) newErrors.aadhaarNo = 'Aadhaar number must be 12 digits';
            if (!input.email || !/\S+@\S+\.\S+/.test(input.email)) newErrors.email = 'Email is invalid';
            if (!input.phone || !/^\d{10}$/.test(input.phone)) newErrors.phone = 'Phone number must be 10 digits';
        }

        if (currentStep === 3) {
            if (!input.password || input.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
            if (input.password !== input.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const calculateCompletion = () => {
        const totalFields = Object.keys(input).length;
        const filledFields = Object.values(input).filter(value => value).length;
        return (filledFields / totalFields) * 100;
    };

    const progressWidth = `${calculateCompletion()}%`;

    return (
        <form className='w-full basis-3/5 p-10 px-12' onSubmit={handleSubmit}>
            <div className="progressbar h-5 w-full bg-gray p-1">
                <div className='h-full w-full bg-tertiary transition-transform ease-in-out duration-500'
                    style={{
                        transform: `scaleX(${progressWidth})`,
                        transformOrigin: 'left',
                    }}
                />
            </div>

            {step === 1 && <SignUp1 input={input} handleChange={handleChange} />}
            {step === 2 && <SignUp2 input={input} handleChange={handleChange} />}
            {step === 3 && <SignUp3 input={input} handleChange={handleChange} />}

            <div className='w-full flex justify-end gap-5'>
                {step > 1 && <Button design='stroked' onClick={prevStep}>Previous</Button>}
                {step < 3 && <Button color='dark' onClick={nextStep}>Next</Button>}
                {   step == 3 ? 
                        <Button color='dark' type='submit'>Sign Up</Button> : 
                    null
                }
                {/* <button type='button' onClick={handleSubmit} className='bg-dark text-light px-5 py-2 rounded-lg'>Sign Up</button> */}
            </div>
        </form>
    )
}

export default SignUpForm
