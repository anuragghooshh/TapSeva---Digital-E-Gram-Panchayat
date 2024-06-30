import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

const NavBar = () => {
    return (
        <nav className='w-full h-nav bg-primary sticky top-0 flex justify-between items-center px-10'>
            <h2 className='font-gyst text-3xl font-bold text-light'>TapSeva</h2>
            <div className='flex gap-10 items-center'>
                <ul className='flex space-x-10'>
                    <li className='text-light font-work font-medium'>
                        <Link to='/'>Services</Link>
                    </li>
                    <li className='text-light font-work font-medium'>
                        <Link to='/'>Downloads</Link>
                    </li>
                    <li className='text-light font-work font-medium'>
                        <Link to='/'>About</Link>
                    </li>
                    <li className='text-light font-work font-medium'>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
                <Button>Log In</Button>
            </div>
        </nav>
    )
}

export default NavBar
