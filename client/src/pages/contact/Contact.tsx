import React from 'react'
import Hero from '../../components/hero/index'
import InputAndLabel from '../../components/inputAndLabel/InputAndLabel'
import Input from '../../components/inputAndLabel/Input'
import Label from '../../components/inputAndLabel/Label'
import Button from '../../components/button/Button'

const Contact = () => {
  return (
    <div className='page' id='contact' >
      <Hero>
        <Hero.Title>Contact Us</Hero.Title>
        <Hero.SubTitle>We're here to help! Reach out to us with any questions or concerns.</Hero.SubTitle>
      </Hero>
      <section className="py-20">
        <div className="max-w-dsktp mx-auto flex border">
          <form className='space-y-8 basis-3/5 p-10 bg-light' >
            <div className='space-y-6'>
              <InputAndLabel>
                <Label htmlFor='name'>Name</Label>
                <Input type='text' placeholder='Enter your name' id='name' name='name' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.')
                }} />
              </InputAndLabel>
              <InputAndLabel>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' placeholder='Enter your email' id='email' name='email' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.')
                }} />
              </InputAndLabel>
              <InputAndLabel>
                <Label htmlFor='phone'>Phone</Label>
                <Input type='tel' placeholder='Enter your phone number' id='phone' name='phone' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.')
                }} />
              </InputAndLabel>
              <InputAndLabel>
                <Label htmlFor='message'>Message</Label>
                <Input type='text' placeholder='Enter your message' id='message' name='message' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.')
                }} />
              </InputAndLabel>
            </div>
            <div className='space-x-4 flex justify-end'>
              <Button design='stroked' color='dark' >Clear</Button>
              <Button type='submit'>Send Message</Button>
            </div>
          </form>
          <div className='bg-dark basis-2/5 p-10'>
            <div className='block'>
              <p className='font-work text-base text-light' >Mail us at</p>
              <a href=" " className='font-gyst text-3xl text-light' >tapseva.helpdesk@mail.com</a>
            </div>
            <div className='block mt-7'>
              <p className='font-work text-base text-light' >Call our helpline</p>
              <h3 className='font-gyst text-3xl text-light' >+xx xxxxx - xxxxx</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
