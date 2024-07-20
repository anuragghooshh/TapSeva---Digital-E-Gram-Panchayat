import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Button from '../../components/button/Button'

const AuthLayout = () => {
    return (
        <div id='page' className='authenticate w-full bg-light-100 px-4'>
            <section className="py-10 md:py-16 lg:py-20">
                <div className='max-w-dsktp mx-auto flex flex-col gap-10 items-start' >
                    <Button
                        link={true}
                        path='/'
                        design='stroked'
                        color='color'
                    >
                        Go Back
                    </Button>
                    <div className="toggle flex flex-col items-center gap-2 md:flex-row w-full">
                        <NavLink
                            to="/auth/signin"
                            className={({ isActive }) =>
                                `text-base lg:text-2xl font-work font-medium py-4 px-2 lg:py-4 lg:px-8 border w-full text-center ${isActive ? 'bg-dark text-light-100' : 'bg-light-200 text-dark'
                                }`
                            }
                        >
                            Sign In
                        </NavLink>
                        <NavLink
                            to="/auth/signup"
                            className={({ isActive }) =>
                                `text-base lg:text-2xl font-work font-medium py-4 px-2 lg:py-4 lg:px-8 border w-full text-center ${isActive ? 'bg-dark text-light-100' : 'bg-light-200 text-dark'
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
