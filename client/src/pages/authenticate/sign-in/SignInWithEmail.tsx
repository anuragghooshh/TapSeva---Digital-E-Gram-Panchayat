import React from 'react'
import InputAndLabel from '../../../components/inputAndLabel/InputAndLabel'
import Button from '../../../components/button/Button'
import { Link } from 'react-router-dom'

const SignInWithEmail = () => {
  return (
    <form className='w-full basis-3/5 space-y-10 px-5 py-10 lg:p-10 lg:px-12' >
      <div className='space-y-5'>
        <div className='space-y-2'>
          <InputAndLabel>
            <div className='flex justify-between'>
              <InputAndLabel.Label htmlFor='email'>Email</InputAndLabel.Label>
              <Link title='Log in with Phone Instead' to="../" className='text-xs underline font-work text-dark' replace={true} >Log In with phone instead</Link>
            </div>
            <InputAndLabel.Input type='email' placeholder='Enter your Email ID' id='email' name='email' required={true} value='' onChange={function (_e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error('Function not implemented.')
            }} />
          </InputAndLabel>
          <p className='text-xs font-work text-gray-300' >Enter your email ID and we'll send you a verification code to confirm it's you. Then enter it below.</p>
        </div>
        <div className='space-y-2'>
          <Button color='dark'>Send Verification Code</Button>
          <div className='space-x-1'>
            <p className='inline text-xs font-work text-gray-300'>Didn't receive?</p>
            <button className='text-xs underline font-work text-dark'></button>
          </div>
        </div>
      </div>

      <div className='space-y-5'>
        <InputAndLabel>
          <InputAndLabel.Label htmlFor='otp' >Enter your Verification Code</InputAndLabel.Label>
          <InputAndLabel.Input type='text' placeholder='Write here' id='otp' name='otp' required={true} value='' onChange={function (_e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.')
          }} />
        </InputAndLabel>
        <div className='grid grid-cols-1 gap-5 lg:flex'>
          <Button design='stroked' >Clear</Button>
          <Button color='disabled'>Verify and Log In</Button>
        </div>
      </div>
    </form>
  )
}

export default SignInWithEmail
