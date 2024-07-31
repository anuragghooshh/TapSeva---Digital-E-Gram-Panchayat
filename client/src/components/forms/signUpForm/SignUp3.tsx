import React from 'react'
import InputAndLabel from '../../inputAndLabel/InputAndLabel'
import { SignUpProps } from './SignUpForm'

const SignUp3 : React.FC<SignUpProps> = ({handleChange, input, errors}) => {
    return (
        <div className="space-y-5">
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='password'>Password</InputAndLabel.Label>
                <InputAndLabel.Input type='password' placeholder='Enter your Password' id='password' name='password' required={true} value={input.password} onChange={handleChange} />
                {errors.password && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.password}</p>}
            </InputAndLabel>
            <InputAndLabel>
                <InputAndLabel.Label htmlFor='confirmPassword'>Confirm Password</InputAndLabel.Label>
                <InputAndLabel.Input type='password' placeholder='Confirm your Password' id='confirmPassword' name='confirmPassword' required={true} value={input.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.confirmPassword}</p>}
            </InputAndLabel>
        </div>
    )
}

export default SignUp3
