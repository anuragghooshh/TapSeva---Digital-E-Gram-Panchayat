import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

const NavBar = () => {
    const [showNavbar, setShowNavbar] = React.useState(true);
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
        prevScrollPos = currentScrollPos;
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // w-full h-nav bg-primary sticky top-0 flex justify-between items-center px-10

    return (
        <nav className={`
            w-full max-w-nav left-1/2 -translate-x-1/2 h-nav bg-dark fixed top-5 rounded-lg border border-opacity-50 border-light
            flex justify-between items-center px-10 
            ${!showNavbar ? 'translate-y-nav' : 'translate-y-0'} 
            transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1)
        `}>
            <Link to='/'>
                <h2 className='font-gyst text-3xl font-bold text-light'>TapSeva</h2>
            </Link>
            <div className='flex gap-10 items-center'>
                <ul className='flex space-x-10'>
                    <li className='text-light font-work font-medium'>
                        <Link to='services'>Services</Link>
                    </li>
                    <li className='text-light font-work font-medium'>
                        <Link to='downloads'>Downloads</Link>
                    </li>
                    <li className='text-light font-work font-medium'>
                        <Link to='about'>About</Link>
                    </li>
                    <li className='text-light font-work font-medium'>
                        <Link to='contact'>Contact</Link>
                    </li>
                </ul>
                <Button>Log In</Button>
            </div>
        </nav>
    )
}

export default NavBar
