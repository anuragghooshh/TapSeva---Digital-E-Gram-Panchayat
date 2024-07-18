import React from 'react'
import InputAndLabel from '../../inputAndLabel/InputAndLabel'
import { SignUpProps } from './SignUpForm'


const SignUp1 : React.FC<SignUpProps> = ({handleChange, input}) => {
    return (
        <div className="space-y-5 border-b-2 border-b-gray py-10 ">
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='name'>Name</InputAndLabel.Label>
                <InputAndLabel.Input type='text' placeholder='Enter your Name' id='name' name='name' required={false} value={input.name} onChange={handleChange} />
            </InputAndLabel>
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='dob'>DOB</InputAndLabel.Label>
                <InputAndLabel.Input type='date' placeholder='Enter your Date of Birth' id='dob' name='dob' required={false} value={input.dob} onChange={handleChange} />
            </InputAndLabel>
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='address'>Address</InputAndLabel.Label>
                <InputAndLabel.Input type='text' placeholder='Enter your Address' id='address' name='address' required={false} value={input.address} onChange={handleChange} />
            </InputAndLabel>
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='maritalStatus'>Marital Status</InputAndLabel.Label>
                <InputAndLabel.Select id='maritalStatus' name='maritalStatus' value={input.maritalStatus} onChange={handleChange} >
                    <InputAndLabel.Select.Option value='' disabled={true}>Select Marital Status</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='Single'>Single</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='Married'>Married</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='Divorced'>Divorced</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='Widowed'>Widowed</InputAndLabel.Select.Option>
                </InputAndLabel.Select>
            </InputAndLabel>
        </div>
    )
}

export default SignUp1