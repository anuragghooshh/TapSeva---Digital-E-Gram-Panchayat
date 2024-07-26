import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../button/Button';
import AuthContext from '../../contexts/auth/AuthContext';
import Ham from '../ham/Ham';
import { CgProfile } from 'react-icons/cg';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [sideBar, setSideBar] = React.useState(false);
  const { userType, userData, isLoggedIn } = React.useContext(AuthContext);
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
  const liCommonStyle = 'font-work font-medium flex';

  const renderLinks = () => (
    <>
      <li className={liCommonStyle}>
        <NavLink
          className={

            ({ isActive }) =>
              isActive ? `text-primary ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`
          }
          to='/'
        >{userType !== 'admin' ? 'Home' : 'Dashboard'}</NavLink>
      </li>
      <li className={liCommonStyle}>
        <NavLink
          className={

            ({ isActive }) =>
              isActive ? `text-primary ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`
          }
          to='services'
        >Services</NavLink>
      </li>
      {isLoggedIn && (
        <li className={liCommonStyle}>
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
        <li className={liCommonStyle}>
          <NavLink
            className={

              ({ isActive }) =>
                isActive ? `text-primary ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`
            }
            to='downloads'
          >Downloads</NavLink>
        </li>
      )}
      <li className={liCommonStyle}>
        <NavLink
          className={

            ({ isActive }) =>
              isActive ? `text-primary ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`
          }
          to='about'
        >About</NavLink>
      </li>
      <li className={liCommonStyle}>
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

  const [glanceProfile, setGlanceProfile] = React.useState(false);


  const renderAuthButton = () => (
    isLoggedIn ? (
      <div className='relative' onMouseEnter={()=>{setGlanceProfile(true)}} onMouseLeave={()=>{setGlanceProfile(false)}}>
        <Link to="profile" className='w-12 h-12 grid place-items-center rounded-full bg-gray-100'><CgProfile size={32} color='#8AB740' /></Link>
        <div onMouseEnter={()=>{setGlanceProfile(true)}} onMouseLeave={()=>{setGlanceProfile(false)}} className={`absolute p-4 right-1/2 space-y-5 border border-gray-200 shadow-lg bg-gray-100 rounded-md origin-top-right ease-in-out duration-150 ${ glanceProfile ? 'visible scale-100 opacity-100' : 'invisible scale-0 opacity-0'} `}>
          <p className='font-work text-lg text-center text-secondary'>Hello, <span className='font-semibold'>{userData.name.split(' ')[0]}</span>!</p>
          <div className='space-y-2 grid grid-rows-1 place-items-center'>
            <Button link={true} path='profile' color='color'>View Profile</Button>
            <div className='grid grid-cols-3 w-full place-items-center'>
              <div className='bg-gray-200 h-0.5 w-full'/>
              <p className='font-gyst font-bold text-gray-200'>Or</p>
              <div className='bg-gray-200 h-0.5 w-full'/>
            </div>
            <Button color='color'>Logout</Button>
          </div>
        </div>
      </div>
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
          <ul className='flex-col text-dark w-full'>
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
