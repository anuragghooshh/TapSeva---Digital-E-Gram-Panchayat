import React from 'react'
import InputAndLabel from '../components/inputAndLabel/InputAndLabel'
import Label from '../components/inputAndLabel/Label'
import Input from '../components/inputAndLabel/Input'
import Button from '../components/button/Button'

const SignUpForm = () => {
    const [input, setInput] = React.useState({
        name: '',
        dob: '',
        address: '',
        maritialStatus: '',
        aadhaar: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const clear = () => {
        setInput({
            name: '',
            dob: '',
            address: '',
            maritialStatus: '',
            aadhaar: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const postData = new Object() as any;

        postData.name = input.name;
        postData.dob = input.dob;
        postData.address = input.address;
        postData.maritialStatus = input.maritialStatus;
        postData.aadhaar = input.aadhaar;
        postData.email = input.email;
        postData.phone = input.phone;
        postData.password = input.password;

        try {
          const response = await fetch('/api/auth', {
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

    return (
        <form className='w-full basis-3/5 p-10 px-12' onSubmit={handleSubmit}>
            <div className="space-y-5 border-b-2 border-b-gray py-10 ">
                <InputAndLabel>
                    <Label htmlFor='name'>Name</Label>
                    <Input type='text' placeholder='Enter your Name' id='name' name='name' required={false} value={input.name} onChange={handleChange} />
                </InputAndLabel>
                <InputAndLabel>
                    <Label htmlFor='dob'>DOB</Label>
                    <Input type='date' placeholder='Enter your Date of Birth' id='dob' name='dob' required={false} value={input.dob} onChange={handleChange} />
                </InputAndLabel>
                <InputAndLabel>
                    <Label htmlFor='address'>Address</Label>
                    <Input type='text' placeholder='Enter your Address' id='address' name='address' required={false} value={input.address} onChange={handleChange} />
                </InputAndLabel>
                <InputAndLabel>
                    <Label htmlFor='maritialStatus'>Maritial Status</Label>
                    <Input type='text' placeholder='Enter your Maritial Status' id='maritialStatus' name='maritialStatus' required={false} value={input.maritialStatus} onChange={handleChange} />
                </InputAndLabel>
            </div>

            <div className="space-y-5 border-b-2 border-b-gray py-10">
                <InputAndLabel>
                    <Label htmlFor='aadhaar'>Aaadhar No.</Label>
                    <Input type='text' placeholder='Enter your Aadhar Number' id='aadhaar' name='aadhaar' required={false} value={input.aadhaar} onChange={handleChange} />
                </InputAndLabel>
                <InputAndLabel>
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' placeholder='Enter your Email' id='email' name='email' required={false} value={input.email} onChange={handleChange} />
                </InputAndLabel>
                <InputAndLabel>
                    <Label htmlFor='phone'>Phone</Label>
                    <Input type='tel' placeholder='Enter your Phone Number' id='phone' name='phone' required={false} value={input.phone} onChange={handleChange} />
                </InputAndLabel>
            </div>

            <div className="space-y-5 py-10">
                <InputAndLabel>
                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' placeholder='Enter your Password' id='password' name='password' required={false} value={input.password} onChange={handleChange} />
                </InputAndLabel>
                <InputAndLabel>
                    <Label htmlFor='confirmPassword'>Confirm Password</Label>
                    <Input type='password' placeholder='Confirm your Password' id='confirmPassword' name='confirmPassword' required={false} value={input.confirmPassword} onChange={handleChange} />
                </InputAndLabel>
            </div>
            <div className='w-full flex justify-end gap-5'>
                <Button design='stroked' onClick={clear} >Clear</Button>
                <Button color='dark' type='submit'>Sign Up</Button>
                {/* <button type='button' onClick={handleSubmit} className='bg-dark text-light px-5 py-2 rounded-lg'>Sign Up</button> */}
            </div>
        </form>
    )
}

export default SignUpForm
