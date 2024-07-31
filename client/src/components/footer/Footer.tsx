import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import AuthContext from '../../contexts/auth/AuthContext';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../assets/images/logo/Logo Light.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
  const { userType, isLoggedIn } = React.useContext(AuthContext);

  const links = [
    { path: 'services', label: 'Services' },
    ...(userType === 'villager' ? [
      { path: 'about', label: 'About' },
      { path: 'contact', label: 'Contact' },
      { path: 'downloads', label: 'Downloads' }
    ] : []),
    ...(userType === 'staff' || userType === 'admin' ? [{ path: 'updates', label: 'Updates' }] : []),
    ...(userType === 'admin' ? [{ path: 'users', label: 'Users' }] : []),
    ...(isLoggedIn ? [{ path: 'applications', label: 'Applications' }] : [])
  ];

  return (
    <footer className='footer'>
      <div className='bg-secondary p-5 pb-10 text-light-100 lg:gap-5 rounded-md'>
        <div className='flex flex-col md:flex-row justify-between items-start'>
          <div className='logo-and-social-links flex flex-col gap-8'>
            <img src={logo} alt='Logo' className='w-40' />
            <ul className='flex gap-5 font-work text-base'>
              <li><a href='https://www.instagram.com/anuragghoshh/' title='Instagram' target='_blank' rel='noreferrer'><FaInstagram size={36} /></a></li>
              <li><a href='https://www.facebook.com/anurag.obtevious/' title='Facebook' target='_blank' rel='noreferrer'><FaFacebook size={36} /></a></li>
              <li><a href='https://x.com/anurag2k2' title='X' target='_blank' rel='noreferrer'><FaXTwitter size={36} /></a></li>
              <li><a href='https://www.linkedin.com/in/anuragghoshh/' title='LinkedIn' target='_blank' rel='noreferrer'><FaLinkedin size={36} /></a></li>
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-10 md:mt-0 md:flex-row">
            <div className='space-y-5'>
              <h3 className='font-work'>Quick Links</h3>
              <ul className='font-work text-base'>
                {links.map(link => (
                  <li key={link.path}>
                    <Link to={`${link.path}`}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='space-y-5'>
              <h3 className='font-work'>Socials</h3>
              <ul className='font-work text-base'>
                <li><a href='https://www.instagram.com/anuragghoshh/' title='Instagram' target='_blank' rel='noreferrer'>Instagram</a></li>
                <li><a href='https://www.facebook.com/anurag.obtevious/' title='Facebook' target='_blank' rel='noreferrer'>Facebook</a></li>
                <li><a href='https://x.com/anurag2k2' title='X' target='_blank' rel='noreferrer'>X</a></li>
                <li><a href='https://www.linkedin.com/in/anuragghoshh/' title='LinkedIn' target='_blank' rel='noreferrer'>LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-40 flex flex-col gap-5 md:flex-row md:justify-between'>
          <p className=' font-work text-base'>
            ©{new Date().getFullYear()} TapSeva. All rights reserved.
          </p>
          <div className='flex gap-5 p-2 bg-light-100 justify-center items-center rounded-md'>
            <p className='font-work text-base text-dark text-center'>
              Made with ❤️ by Anurag Ghosh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;