import React from 'react'

const Footer = () => {
    return (
        <footer className='flex h-footer justify-between p-20 bg-secondary text-light'>
            <div className="flex-col relative space-y-10">
                <div>
                    <h3 className='font-gyst text-3xl font-medium'>TapSeva</h3>
                    <ul className='flex space-x-5 font-work text-base mt-5'>
                        <li><a href='#' target='_blank'>Instagram</a></li>
                        <li><a href='#' target='_blank'>Facebook</a></li>
                        <li><a href='#' target='_blank'>Twitter</a></li>
                        <li><a href='#' target='_blank'>LinkedIn</a></li>
                    </ul>
                    <p className='font-work text-base absolute bottom-0' >©{new Date().getFullYear()} TapSeva. All rights reserved.</p>
                </div>
            </div>
            <div className="flex space-x-40">
                <div className='flex-col space-y-5' >
                    <h3>Quick Links</h3>
                    <ul className='font-work text-base'>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Downloads</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className='flex-col space-y-5' >
                    <h3>Quick Links</h3>
                    <ul className='font-work text-base'>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Downloads</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
