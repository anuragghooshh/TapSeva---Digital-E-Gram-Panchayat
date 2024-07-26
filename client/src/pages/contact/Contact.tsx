import React from 'react'
import Hero from '../../components/hero/Hero'
import InputAndLabel from '../../components/inputAndLabel/InputAndLabel'
import Input from '../../components/inputAndLabel/Input'
import Label from '../../components/inputAndLabel/Label'
import Button from '../../components/button/Button'
import contactBG from '../../assets/images/contactUsBG.jpg'

const Contact = () => {
  return (
    <div className='page' id='contact' >
      <Hero>
        <Hero.Title>Contact Us</Hero.Title>
        <Hero.Subtitle>We're here to help! Reach out to us with any questions or concerns.</Hero.Subtitle>
      </Hero>
      <section className="py-10 md:py-16 lg:py-20">
        <div className="max-w-dsktp mx-auto flex border flex-col-reverse lg:flex-row">
          <form className='space-y-8 basis-3/5 px-5 py-10 md:p-10 bg-light' >
            <div className='space-y-6'>
              <InputAndLabel>
                <InputAndLabel.Label htmlFor='name'>Name</InputAndLabel.Label>
                <InputAndLabel.Input type='text' placeholder='Enter your name' id='name' name='name' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.')
                }} />
              </InputAndLabel>
              <InputAndLabel>
                <InputAndLabel.Label htmlFor='email'>Email</InputAndLabel.Label>
                <InputAndLabel.Input type='email' placeholder='Enter your email' id='email' name='email' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.')
                }} />
              </InputAndLabel>
              <InputAndLabel>
                <InputAndLabel.Label htmlFor='phone'>Phone</InputAndLabel.Label>
                <InputAndLabel.Input type='tel' placeholder='Enter your phone number' id='phone' name='phone' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.')
                }} />
              </InputAndLabel>
              <InputAndLabel>
                <InputAndLabel.Label htmlFor='message'>Message</InputAndLabel.Label>
                <InputAndLabel.Input type='text' placeholder='Enter your message' id='message' name='message' required={true} value='' onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.')
                }} />
              </InputAndLabel>
            </div>
            <div className='flex justify-end gap-2 flex-col lg:flex-row'>
              <Button design='stroked' color='dark' >Clear</Button>
              <Button type='submit'>Send Message</Button>
            </div>
          </form>
          <div className='basis-2/5 px-5 py-10 lg:p-10 bg-img'
            style={{
              backgroundImage: `url(${contactBG})`,
            }}
          >
            <div className="block">
              <p className="font-work text-base md:text-lg lg:text-xl text-light">Mail us at</p>
              <a href="mailto:tapseva.helpdesk@mail.com" className="font-gyst text-2xl md:text-3xl lg:text-4xl text-light">tapseva.helpdesk@mail.com</a>
            </div>
            <div className="block mt-5 md:mt-6 lg:mt-7">
              <p className="font-work text-base md:text-lg lg:text-xl text-light">Call our helpline</p>
              <h3 className="font-gyst text-2xl md:text-3xl lg:text-4xl text-light">+xx xxxxx - xxxxx</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
