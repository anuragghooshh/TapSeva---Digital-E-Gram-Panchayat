import React from 'react'
import { Outlet } from 'react-router-dom'
import InputAndLabel from '../../components/inputAndLabel/InputAndLabel'
import Label from '../../components/inputAndLabel/Label'
import Input from '../../components/inputAndLabel/Input'
import Button from '../../components/button/Button'

const SignUp = () => {
  return (
    <section className='pb-20' id='signIn'>
      <div className='max-w-dsktp mx-auto flex border'>
        <form className='w-full basis-3/5 p-10 px-12'>
          <div className="space-y-5 border-b-2 border-b-gray py-10 ">
            <InputAndLabel>
              <Label htmlFor='name'>Name</Label>
              <Input type='text' placeholder='Enter your Name' id='name' name='name' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.')
              }} />
            </InputAndLabel>
            <InputAndLabel>
              <Label htmlFor='dob'>DOB</Label>
              <Input type='date' placeholder='Enter your Date of Birth' id='dob' name='dob' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.')
              }} />
            </InputAndLabel>
            <InputAndLabel>
              <Label htmlFor='address'>Address</Label>
              <Input type='text' placeholder='Enter your Address' id='address' name='address' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.')
              }} />
            </InputAndLabel>
            <InputAndLabel>
              <Label htmlFor='maritialStatus'>Maritial Status</Label>
              <Input type='text' placeholder='Enter your Maritial Status' id='maritialStatus' name='maritialStatus' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.')
              }} />
            </InputAndLabel>
          </div>

          <div className="space-y-5 border-b-2 border-b-gray py-10">
            <InputAndLabel>
              <Label htmlFor='aadhaar'>Aaadhar No.</Label>
              <Input type='number' placeholder='Enter your Aadhaar Number' id='aadhaar' name='aadhaar' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.')
              }} />
            </InputAndLabel>
            <InputAndLabel>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' placeholder='Enter your Email ID' id='email' name='email' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.')
              }} />
            </InputAndLabel>
            <InputAndLabel>
              <Label htmlFor='phone'>Phone</Label>
              <Input type='tel' placeholder='Enter your Phone Number' id='phone' name='phone' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.')
              }} />
            </InputAndLabel>
          </div>

          <div className="space-y-5 border-b-2 border-b-gray py-10">
            <InputAndLabel>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' placeholder='Enter your Password' id='password' name='password' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.')
              }} />
            </InputAndLabel>
            <InputAndLabel>
              <Label htmlFor='confirmPassword'>Confirm Password</Label>
              <Input type='password' placeholder='Re-enter your Password' id='confirmPassword' name='confirmPassword' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.')
              }} />
            </InputAndLabel>
          </div>
        </form>
        <div className='bg-dark p-10 basis-2/5 w-full flex items-start justify-start'>
          <Button color='light'>Sign in with Google</Button>
        </div>
      </div>
    </section>
  )
}

export default SignUp
