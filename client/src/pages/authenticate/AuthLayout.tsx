import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Button from '../../components/button/Button'

const AuthLayout = () => {
    return (
        <div id='page' className='authenticate w-full bg-light'>
            <section className="py-20">
                <div className='max-w-dsktp mx-auto flex flex-col gap-10 items-start' >
                    <Button
                        link={true}
                        path='/'
                        design='stroked'
                        color='color'
                    >
                        Go Back
                    </Button>
                    <div className="toggle flex space-x-4 w-full">
                        <NavLink
                            to="/auth/signin"
                            className={({ isActive }) =>
                                `text-2xl font-work font-medium py-4 px-8 border w-full text-center ${isActive ? 'bg-dark text-light' : 'bg-light text-dark'
                                }`
                            }
                        >
                            Sign In
                        </NavLink>
                        <NavLink
                            to="/auth/signup"
                            className={({ isActive }) =>
                                `text-2xl font-work font-medium py-4 px-8 border w-full text-center ${isActive ? 'bg-dark text-light' : 'bg-light text-dark'
                                }`
                            }
                        >
                            Create new account
                        </NavLink>
                    </div>
                </div>
            </section>
            <Outlet />
        </div>
    )
}

export default AuthLayout
