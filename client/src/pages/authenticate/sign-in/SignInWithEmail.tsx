import React from 'react'
import InputAndLabel from '../../../components/inputAndLabel/InputAndLabel'
import Label from '../../../components/inputAndLabel/Label'
import Input from '../../../components/inputAndLabel/Input'
import Button from '../../../components/button/Button'
import { Link } from 'react-router-dom'

const SignInWithEmail = () => {
  return (
    <form className='w-full basis-3/5 space-y-10 p-10 px-12' >
      <div className='space-y-5'>
        <div className='space-y-2'>
          <InputAndLabel>
            <div className='flex justify-between'>
              <Label htmlFor='email'>Email</Label>
              <Link to="../" className='text-xs underline font-work text-dark' >Log In with phone instead</Link>
            </div>
            <Input type='email' placeholder='Enter your Email ID' id='email' name='email' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error('Function not implemented.')
            }} />
          </InputAndLabel>
          <p className='text-xs font-work text-dark' >Enter your email ID and we'll send you a verification code to confirm it's you. Then enter it below.</p>
        </div>
        <div className='space-y-2'>
          <Button>Send Verification Code</Button>
          <div className='space-x-1'>
            <p className='inline text-xs font-work text-dark'>Didn't receive?</p>
            <button className='text-xs underline font-work text-dark' >Resend</button>
          </div>
        </div>
      </div>

      <div className='space-y-5'>
        <InputAndLabel>
          <Label htmlFor='otp' >Enter your Verification Code</Label>
          <Input type='text' placeholder='Write here' id='otp' name='otp' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
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

export default SignInWithEmail
