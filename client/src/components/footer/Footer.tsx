import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import AuthContext from '../../contexts/auth/AuthContext';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../assets/images/logo/Logo Light.svg';


const Footer = () => {
  const { userType, isLoggedIn } = React.useContext(AuthContext);

  const links = [
    { path: 'services', label: 'Services' },
    ...(userType !== 'admin' && userType !== 'staff' ? [{ path: 'downloads', label: 'Downloads' }] : []),
    ...(userType === 'villager' ? [
      { path: 'about', label: 'About' },
      { path: 'contact', label: 'Contact' }
    ] : []),
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

          <div className="mt-10 flex flex-col gap-10 md:mr-20 md:mt-0 md:flex-row">
            <div className=''>
              <h3>Quick Links</h3>
              <ul className='font-work text-base'>
                {links.map(link => (
                  <li key={link.path}>
                    <a href={`#${link.path}`}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <h3>Quick Links</h3>
              <ul className='font-work text-base'>
                {links.map(link => (
                  <li key={link.path}>
                    <a href={`#${link.path}`}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className='mt-40 font-work text-base'>
          ©{new Date().getFullYear()} TapSeva. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;