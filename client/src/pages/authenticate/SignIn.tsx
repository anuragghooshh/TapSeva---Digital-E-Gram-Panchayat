import React from 'react'
import Label from '../../components/inputAndLabel/Label'
import Input from '../../components/inputAndLabel/Input'
import InputAndLabel from '../../components/inputAndLabel/InputAndLabel'
import Button from '../../components/button/Button'
import { Outlet } from 'react-router-dom'

const SignIn = () => {
  return (
    <section className='py-20' id='signIn'>
      <div className='max-w-dsktp mx-auto flex'>
        <Outlet/>
        <div className='bg-dark p-10 basis-2/5 w-full flex items-center justify-center'>
          <Button color='light' >Sign in with Google</Button>
        </div>
      </div>

    </section>
  )
}

export default SignIn
