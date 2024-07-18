import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../button/Button';
import AuthContext from '../../contexts/auth/AuthContext';
import Ham from '../ham/Ham';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [sideBar, setSideBar] = React.useState(false);
  const { userType, isLoggedIn } = React.useContext(AuthContext);
  let prevScrollPos = React.useRef(window.scrollY).current;

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setShowNavbar(prevScrollPos > currentScrollPos);
    prevScrollPos = currentScrollPos;
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderLinks = () => (
    <>
      <li className='font-work font-medium'>
        <NavLink
          className={
            ({ isActive }) =>
              isActive ? 'text-primary' : 'text-dark'
          }
          to='/'
        >{userType !== 'admin' ? 'Home' : 'Dashboard'}</NavLink>
      </li>
      <li className='font-work font-medium'>
        <NavLink
          className={
            ({ isActive }) =>
              isActive ? 'text-primary' : 'text-dark'
          }
          to='services'
        >Services</NavLink>
      </li>
      {isLoggedIn && (
        <li className='font-work font-medium'>
          <NavLink
            className={
              ({ isActive }) =>
                isActive ? 'text-primary' : 'text-dark'
            }
            to='applications'
          >Applications</NavLink>
        </li>
      )}
      {userType !== 'admin' && (
        <li className='font-work font-medium'>
          <NavLink
            className={
              ({ isActive }) =>
                isActive ? 'text-primary' : 'text-dark'
            }
            to='downloads'
          >Downloads</NavLink>
        </li>
      )}
      <li className='font-work font-medium'>
        <NavLink
          className={
            ({ isActive }) =>
              isActive ? 'text-primary' : 'text-dark'
          }
          to='about'
        >About</NavLink>
      </li>
      <li className='font-work font-medium'>
        <NavLink
          className={
            ({ isActive }) =>
              isActive ? 'text-primary' : 'text-dark'
          }
          to='contact'
        >Contact</NavLink>
      </li>
    </>
  );

  const renderAuthButton = () => (
    isLoggedIn ? (
      <Button link={true} path='profile' color='dark' design='filled'>Profile</Button>
    ) : (
      <Button link={true} path='auth/signin' color='dark' design='filled'>Sign In</Button>
    )
  );

  return (
    <>
      {/* <nav
        className={`
          hidden w-full left-1/2 -translate-x-1/2 h-nav bg-light fixed top-0 z-50
          justify-between items-center px-5 
          ${!showNavbar ? 'translate-y-nav' : 'translate-y-0'} 
          transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1)
          md:flex
        `}
      >
        <Link to='/'>
          <h2 className='font-gyst text-3xl font-bold text-primary'>TapSeva</h2>
        </Link>
        <div className='flex gap-10 items-center'>
          <ul className='flex space-x-10 text-dark'>
            {renderLinks()}
          </ul>
          {renderAuthButton()}
          <Ham task={() => { setSideBar(!sideBar) }} activeStatus={sideBar ? 'active' : ''} />
        </div>
      </nav> */}
      <nav
        className={`
          flex w-full left-1/2 -translate-x-1/2 h-nav bg-light fixed top-0 z-50
          justify-between items-center px-5 
          ${!showNavbar ? 'translate-y-nav' : 'translate-y-0'} 
          transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1)
          md:hidden
        `}
      >
        <Link to='/'>
          <h2 className='font-gyst text-lg font-bold text-primary'>TapSeva</h2>
        </Link>
        <div className='flex gap-10 items-center'>
          {renderAuthButton()}
          <Ham task={() => { setSideBar(!sideBar) }} activeStatus={sideBar ? 'active' : ''} />
        </div>
        <div className={`sidebar fixed h-screen bg-light left-0 top-0 p-5 w-3/4 ease-in-out duration-500 ${sideBar ? 'translate-x-0' : '-translate-x-full'} `}>
          <ul className='flex-col space-y-10 text-dark'>
            {renderLinks()}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
