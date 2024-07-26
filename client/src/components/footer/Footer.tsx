import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter, FaLinkedin,} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='py-5 footer'>
            <div className='bg-secondary p-5 pb-10 text-light-100 grid gap-10 lg:gap-5 rounded-md'>
                <div className='logo-and-social-links  flex flex-col gap-5'>
                    <h3 className='font-gyst text-3xl font-medium footer-logo'>TapSeva</h3>
                    <ul className='flex gap-5 font-work text-base'>
                        <li><a href='#'><FaInstagram size={36} /></a></li>
                        <li><a href='#'><FaFacebook size={36} /></a></li>
                        <li><a href='#'><FaTwitter size={36} /></a></li>
                        <li><a href='#'><FaLinkedin size={36} /></a></li>
                    </ul>
                </div>
                <div className="grid footer-links  gap-5 lg:pr-10">
                    <div className='flex-col gap-5 '>
                        <h3>Quick Links</h3>
                        <ul className='font-work text-base'>
                            <li><a href='#'>Services</a></li>
                            <li><a href='#'>Downloads</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='flex-col space-y-5 ' >
                        <h3>Quick Links</h3>
                        <ul className='font-work text-base'> 
                            <li><a href='#'>Services</a></li>
                            <li><a href='#'>Downloads</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <p className='font-work text-base copyright ' >©{new Date().getFullYear()} TapSeva. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
