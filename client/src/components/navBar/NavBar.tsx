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

  const renderLinksCommonStyle = 'w-full px-5 py-5 lg:p-0 active:bg-primary active:text-light-100';

  const renderLinks = () => (
    <>
      <li className='font-work font-medium flex'>
        <NavLink
          className={
            
            ({ isActive }) =>
              isActive ? `text-primary ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`
          }
          to='/'
        >{userType !== 'admin' ? 'Home' : 'Dashboard'}</NavLink>
      </li>
      <li className='font-work font-medium flex'>
        <NavLink
          className={
            
            ({ isActive }) =>
              isActive ? `text-primary ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`
          }
          to='services'
        >Services</NavLink>
      </li>
      {isLoggedIn && (
        <li className='font-work font-medium flex'>
          <NavLink
            className={
              
              ({ isActive }) =>
                isActive ? `text-primary ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`
            }
            to='applications'
          >Applications</NavLink>
        </li>
      )}
      {userType !== 'admin' && (
        <li className='font-work font-medium flex'>
          <NavLink
            className={
              
              ({ isActive }) =>
                isActive ? `text-primary ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`
            }
            to='downloads'
          >Downloads</NavLink>
        </li>
      )}
      <li className='font-work font-medium flex'>
        <NavLink
          className={
            
            ({ isActive }) =>
              isActive ? `text-primary ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`
          }
          to='about'
        >About</NavLink>
      </li>
      <li className='font-work font-medium flex'>
        <NavLink
          className={
            
            ({ isActive }) =>
              isActive ? `text-primary ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`
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
      <nav
        className={`
          hidden w-full left-1/2 -translate-x-1/2 h-nav bg-light-100 fixed top-0 z-50
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
        </div>
      </nav>
      <nav
        className={`
          flex w-full left-1/2 -translate-x-1/2 h-nav bg-light-100 fixed top-0 z-50
          justify-between items-center px-5
          ${!showNavbar ? 'translate-y-nav' : 'translate-y-0'} 
          transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1)
          md:hidden
        `}
      >
        <Link to='/'>
          <h2 className='font-gyst text-lg font-bold text-primary'>TapSeva</h2>
        </Link>
        <Ham task={() => { setSideBar(!sideBar) }} activeStatus={sideBar ? 'active' : ''} />
        <div className={`sidebar fixed h-screen flex flex-col items-start justify-between bg-light-100 left-0 top-0 pb-20 w-3/4 ease-in-out duration-500 ${sideBar ? 'translate-x-0' : '-translate-x-full'} `}>
          <ul className='flex-col text-dark'>
            {renderLinks()}
          </ul>
          <div className="px-5">
          {renderAuthButton()}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
