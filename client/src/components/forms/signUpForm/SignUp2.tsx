import React from 'react'
import InputAndLabel from '../../inputAndLabel/InputAndLabel'
import { SignUpProps } from './SignUpForm'

const SignUp2 : React.FC<SignUpProps> = ({handleChange, input, errors}) => {
    return (
        <div className="space-y-5">
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='aadhaarNo'>Aadhaar No.</InputAndLabel.Label>
                <InputAndLabel.Input type='text' placeholder='XXXX XXXX XXXX' id='aadhaarNo' name='aadhaarNo' required={true} value={input.aadhaarNo} onChange={handleChange} />
                {errors.aadhaarNo && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.aadhaarNo}</p>}
            </InputAndLabel>
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='email'>Email</InputAndLabel.Label>
                <InputAndLabel.Input type='email' placeholder='Enter your Email' id='email' name='email' required={true} value={input.email} onChange={handleChange} />
                {errors.email && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.email}</p>}
            </InputAndLabel>
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='phone'>Phone</InputAndLabel.Label>
                <InputAndLabel.Input type='tel' placeholder='Enter your Phone Number' id='phone' name='phone' required={true} value={input.phone} onChange={handleChange} />
                {errors.phone && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.phone}</p>}
            </InputAndLabel>
        </div>
    )
}

export default SignUp2
