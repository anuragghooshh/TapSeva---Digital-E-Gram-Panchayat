import React from 'react'
import InputAndLabel from '../../inputAndLabel/InputAndLabel'
import { SignUpProps } from './SignUpForm'

const SignUp3 : React.FC<SignUpProps> = ({handleChange, input}) => {
    return (
        <div className="space-y-5 py-10">
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='password'>Password</InputAndLabel.Label>
                <InputAndLabel.Input type='password' placeholder='Enter your Password' id='password' name='password' required={false} value={input.password} onChange={handleChange} />
            </InputAndLabel>
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='confirmPassword'>Confirm Password</InputAndLabel.Label>
                <InputAndLabel.Input type='password' placeholder='Confirm your Password' id='confirmPassword' name='confirmPassword' required={false} value={input.confirmPassword} onChange={handleChange} />
            </InputAndLabel>
        </div>
    )
}

export default SignUp3
