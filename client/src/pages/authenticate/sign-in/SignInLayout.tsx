import React from 'react'
import Button from '../../../components/button/Button'
import { Outlet } from 'react-router-dom'

const SignInLayout = () => {
    return (
        <section className='py-20' id='signIn'>
            <div className='max-w-dsktp mx-auto flex'>
                <Outlet />
                <div className='bg-secondary p-10 basis-2/5 w-full flex items-center justify-center'>
                    <Button color='light' >Sign in with Google</Button>
                </div>
            </div>

        </section>
    )
}

export default SignInLayout
