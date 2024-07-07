import React from 'react'
import Button from '../../components/button/Button'
import SignUpForm from '../../forms/SignUpForm'

const SignUp = () => {
  return (
    <section className='pb-20' id='signIn'>
      <div className='max-w-dsktp mx-auto flex border'>
        <SignUpForm/>
        <div className='bg-dark p-10 basis-2/5 w-full flex items-start justify-start'>
          <Button color='light'>Sign in with Google</Button>
        </div>
      </div>
    </section>
  )
}

export default SignUp
