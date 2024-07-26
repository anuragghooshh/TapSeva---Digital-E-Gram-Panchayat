import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Button from '../../components/button/Button'
import { FaArrowRight, FaPlus } from 'react-icons/fa'
import { FaArrowLeftLong } from 'react-icons/fa6'

const AuthLayout = () => {
    return (
        <div id='page' className='authenticate w-full bg-light-100 px-4'>
            <section className="pt-10 md:pt-16 lg:pt-20">
                <div className='max-w-dsktp mx-auto flex flex-col gap-10 items-start' >
                    <Link to='/' className='text-2xl font-work text-dark flex items-center gap-4'>
                        <FaArrowLeftLong/>
                        Go Back
                    </Link>
                    <div className="toggle grid grid-cols-1 items-center gap-2 md:flex md:flex-row w-full">
                        <NavLink
                            to="/auth/signin"
                            className={({ isActive }) =>
                                `
                                    text-base flex items-center justify-center gap-2 rounded-md lg:text-2xl font-work font-medium py-4 px-2 lg:py-4 lg:px-8 border w-full text-center 
                                    ${isActive ? 'bg-dark text-light-100' : 'bg-light-200 text-dark'}
                                `
                            }
                        >
                            Sign In
                            <FaArrowRight/>
                        </NavLink>
                        <NavLink
                            to="/auth/signup" 
                            className={({ isActive }) =>
                                `
                                    text-base flex items-center justify-center gap-2 rounded-md lg:text-2xl font-work font-medium py-4 px-2 lg:py-4 lg:px-8 border w-full text-center 
                                    ${isActive ? 'bg-dark text-light-100' : 'bg-light-200 text-dark'}
                                `
                            }
                        >
                            Create new account
                            <FaPlus/>
                        </NavLink>
                    </div>
                </div>
            </section>
            <Outlet />
        </div>
    )
}

export default AuthLayout
