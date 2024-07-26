import React from 'react'
import InputAndLabel from '../../inputAndLabel/InputAndLabel'
import { SignUpProps } from './SignUpForm'

const SignUp2 : React.FC<SignUpProps> = ({handleChange, input}) => {
    return (
        <div className="space-y-5">
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='aadhaarNo'>Aaadhaar No.</InputAndLabel.Label>
                <InputAndLabel.Input type='text' placeholder='Enter your aadhaar Number' id='aadhaarNo' name='aadhaarNo' required={true} value={input.aadhaarNo} onChange={handleChange} />
            </InputAndLabel>
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='email'>Email</InputAndLabel.Label>
                <InputAndLabel.Input type='email' placeholder='Enter your Email' id='email' name='email' required={true} value={input.email} onChange={handleChange} />
            </InputAndLabel>
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='phone'>Phone</InputAndLabel.Label>
                <InputAndLabel.Input type='tel' placeholder='Enter your Phone Number' id='phone' name='phone' required={true} value={input.phone} onChange={handleChange} />
            </InputAndLabel>
        </div>
    )
}

export default SignUp2
