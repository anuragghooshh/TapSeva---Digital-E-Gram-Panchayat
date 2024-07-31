import React from 'react'
import InputAndLabel from '../../inputAndLabel/InputAndLabel'
import { SignUpProps } from './SignUpForm'


const SignUp1: React.FC<SignUpProps> = ({ handleChange, input, errors }) => {
    return (
        <div className="space-y-5">
            <InputAndLabel required>
                <InputAndLabel.Label htmlFor='name'>Name</InputAndLabel.Label>
                <InputAndLabel.Input type='text' placeholder='Enter your Name' id='name' name='name' required={true} value={input.name} onChange={handleChange} />
                {errors.name && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.name}</p>}
            </InputAndLabel>
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='sex'>Sex</InputAndLabel.Label>
                <InputAndLabel.Select id='sex' name='sex' value={input.sex} onChange={handleChange} required={true}>
                    <InputAndLabel.Select.Option value='' disabled={true}>Select your sex</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='Male'>Male</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='Female'>Female</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='Other'>Other</InputAndLabel.Select.Option>
                </InputAndLabel.Select>
                { errors.sex && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.sex}</p> }
            </InputAndLabel>
                <InputAndLabel>
                    <InputAndLabel.Label htmlFor='dob'>DOB</InputAndLabel.Label>
                    <InputAndLabel.Input type='date' placeholder='Enter your Date of Birth' id='dob' name='dob' required={true} value={input.dob} onChange={handleChange} />
                    { errors.dob && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.dob}</p> }
                </InputAndLabel>
                <InputAndLabel>
                    <InputAndLabel.Label htmlFor='address'>Address</InputAndLabel.Label>
                    <InputAndLabel.Input type='text' placeholder='Enter your Address' id='address' name='address' required={true} value={input.address} onChange={handleChange} />
                    { errors.address && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.address}</p> }
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
                    { errors.maritalStatus && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.maritalStatus}</p> }
                </InputAndLabel>
        </div>
    )
}

export default SignUp1