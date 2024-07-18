import React from 'react'
import InputAndLabel from '../../../components/inputAndLabel/InputAndLabel'
import Label from '../../../components/inputAndLabel/Label'
import Input from '../../../components/inputAndLabel/Input'
import Button from '../../../components/button/Button'
import { Link } from 'react-router-dom'

const SignInWithPhone = () => {
  return (
    <form className='w-full basis-3/5 space-y-10 p-10 px-12' >
      <div className='space-y-5'>
        <div className='space-y-2'>
          <InputAndLabel>
            <div className='flex justify-between'>
              <InputAndLabel.Label htmlFor='phone'>Phone</InputAndLabel.Label>
              <Link to="email" className='text-xs underline font-work text-dark' >Log In with email instead</Link>
            </div>
            <InputAndLabel.Input type='tel' placeholder='Enter your phone number' id='phone' name='phone' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error('Function not implemented.')
            }} />
          </InputAndLabel>
          <p className='text-xs font-work text-dark' >Enter your mobile number and we'll send you an OTP to confirm it's you. Then enter it below.</p>
        </div>
        <div className='space-y-2'>
          <Button>Send OTP</Button>
          <div className='space-x-1'>
            <p className='inline text-xs font-work text-dark'>Didn't receive?</p>
            <button className='text-xs underline font-work text-dark' >Resend</button>
          </div>
        </div>
      </div>

      <div className='space-y-5'>
        <InputAndLabel>
          <InputAndLabel.Label htmlFor='otp' >Enter your OTP</InputAndLabel.Label>
          <InputAndLabel.Input type='text' placeholder='Write here' id='otp' name='otp' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.')
          }} />
        </InputAndLabel>
        <div className='space-x-1'>
          <Button design='stroked' >Clear</Button>
          <Button>Verify and Log In</Button>
        </div>
      </div>
    </form>
  )
}

export default SignInWithPhone
