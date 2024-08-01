import React from 'react'
import Button from '../../button/Button'
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import SignUp3 from './SignUp3';
import { useNavigate } from 'react-router-dom';

export interface SignUpProps {
    input: {
        name: string,
        sex: string,
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
    errors: any;
}


const SignUpForm = () => {
    const navigate = useNavigate();

    const [input, setInput] = React.useState({
        name: '',
        sex: '',
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
    };

    const clear = () => {
        setInput({
            name: '',
            sex: '',
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
        let newErrors = {} as any;

        if (input.name == "") newErrors.name = 'Name is required';
        if (input.dob == "") newErrors.dob = 'Date of Birth is required';
        if (input.sex == "") newErrors.sex = 'You must enter your sex';
        if (input.address == "") newErrors.address = 'Address is required';
        if (input.maritalStatus == "") newErrors.maritalStatus = 'Marital status is required';

        const strippedAadhaarNo = input.aadhaarNo.replace(/\s+/g, '');
        if (!(/^\d{12}$/.test(strippedAadhaarNo) && strippedAadhaarNo.length === 12)) {
            newErrors.aadhaarNo = 'Aadhaar number must be 12 digits';
        }

        if (input.email == "" || !/\S+@\S+\.\S+/.test(input.email)) newErrors.email = 'Email is invalid';
        if (input.phone == "" || !/^\d{10}$/.test(input.phone)) newErrors.phone = 'Phone number must be 10 digits';
        if (input.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (input.password !== input.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!validate()) return;

        const postData = new Object() as any;

        postData.name = input.name;
        postData.sex = input.sex;
        postData.dob = input.dob;
        postData.address = input.address;
        postData.maritalStatus = input.maritalStatus;
        postData.aadhaarNo = input.aadhaarNo;
        postData.email = input.email;
        postData.phone = input.phone;
        postData.password = input.password;


        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            clear();
            setStep(1);
            navigate('/');
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
        const cleanedAadhaarNo = input.aadhaarNo.replace(/\s+/g, '');

        if (currentStep === 1) {
            if (!input.name) newErrors.name = 'Required*';
            if (!input.sex) newErrors.sex = 'Required*';
            if (!input.dob) newErrors.dob = 'Date of Birth is required';
            if (!input.address) newErrors.address = 'Address is required';
            if (!input.maritalStatus) newErrors.maritalStatus = 'Marital status is required';
        }

        if (currentStep === 2) {
            if (!(/^\d{12}$/.test(cleanedAadhaarNo) && cleanedAadhaarNo.length === 12)) {
                newErrors.aadhaarNo = 'Aadhaar number must be 12 digits and formatted as XXXX XXXX XXXX';
            }
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
        <form className='w-full basis-3/5 space-y-10 py-10 px-5 lg:px-12' onSubmit={handleSubmit}>
            <div>
                <p className='font-work text-sm text-gray-200 mb-2'>Progress</p>
                <div className="progressbar h-5 w-full bg-gray border rounded-full overflow-hidden">
                    <div className='h-full w-full bg-tertiary transition-transform ease-in-out duration-500'
                        style={{
                            transform: `scaleX(${progressWidth})`,
                            transformOrigin: 'left',
                        }}
                    />
                </div>
            </div>

            {step === 1 && <SignUp1 input={input} handleChange={handleChange} errors={errors} />}
            {step === 2 && <SignUp2 input={input} handleChange={handleChange} errors={errors} />}
            {step === 3 && <SignUp3 input={input} handleChange={handleChange} errors={errors} />}

            <div className='grid grid-cols-1 w-full md:flex justify-end gap-3'>
                {step > 1 && <Button design='stroked' onClick={prevStep}>Previous</Button>}
                {step < 3 && <Button color='dark' onClick={nextStep}>Next</Button>}
                {step == 3 ?
                    <Button color='color' type='submit'>Sign Up</Button> :
                    null
                }
            </div>
        </form>
    )
}

export default SignUpForm
