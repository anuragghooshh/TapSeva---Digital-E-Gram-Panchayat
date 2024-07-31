import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../button/Button';
import AuthContext from '../../contexts/auth/AuthContext';
import Ham from '../ham/Ham';
import { CgProfile } from 'react-icons/cg';
import logo from '../../assets/images/logo/Logo Primary.svg';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [sideBar, setSideBar] = React.useState(false);
  const { userType, userData, isLoggedIn, logout } = React.useContext(AuthContext);
  const prevScrollPos = React.useRef(window.scrollY);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setShowNavbar(prevScrollPos.current > currentScrollPos);
    prevScrollPos.current = currentScrollPos;
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderLinksCommonStyle = 'w-full px-5 py-5 rounded-md lg:p-0 lg:rounded-0 relative';
  const liCommonStyle = 'font-work font-medium flex';

  const generateNavLinkClass = (isActive: boolean) =>
    isActive ? `text-primary flex items-center navLinkActive ${renderLinksCommonStyle}` : `text-dark ${renderLinksCommonStyle}`;

  const generateSidebarLinkClass = (isActive: boolean) =>
    isActive ? `text-light-100 bg-primary flex items-center ${renderLinksCommonStyle}` : `text-dark border border-neutral-200 ${renderLinksCommonStyle}`;

  const renderLinks = (isSidebar = false) => (
    <>
      <li className={liCommonStyle} onClick={() => { setSideBar(false) }}>
        <NavLink
          title="Go to Home"
          className={({ isActive }) => isSidebar ? generateSidebarLinkClass(isActive) : generateNavLinkClass(isActive)}
          to='/'
          replace={true}
        >
          {userType !== 'admin' && userType !== 'staff' ? 'Home' : 'Dashboard'}
        </NavLink>
      </li>
      {
        userType === 'admin' || userType === 'staff' ? (
          <li className={liCommonStyle} onClick={() => { setSideBar(false) }}>
            <NavLink
              title="Go to Updates"
              className={({ isActive }) => isSidebar ? generateSidebarLinkClass(isActive) : generateNavLinkClass(isActive)}
              to='updates'
              replace={true}
            >
              Updates
            </NavLink>
          </li>
        ) : null
      }
      <li className={liCommonStyle} onClick={() => { setSideBar(false) }}>
        <NavLink
          title="Go to Services"
          className={({ isActive }) => isSidebar ? generateSidebarLinkClass(isActive) : generateNavLinkClass(isActive)}
          to='services'
          replace={true}
        >
          Services
        </NavLink>
      </li>
      {userType === 'admin' && (
        <li className={liCommonStyle} onClick={() => { setSideBar(false) }}>
          <NavLink
            title="Go to Users"
            className={({ isActive }) => isSidebar ? generateSidebarLinkClass(isActive) : generateNavLinkClass(isActive)}
            to='users'
            replace={true}
          >
            Users
          </NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li className={liCommonStyle} onClick={() => { setSideBar(false) }}>
          <NavLink
            title="Go to Applications"
            className={({ isActive }) => isSidebar ? generateSidebarLinkClass(isActive) : generateNavLinkClass(isActive)}
            to='applications'
            replace={true}
          >
            Applications
          </NavLink>
        </li>
      )}
      {(userType !== 'admin' && userType !== 'staff') && (
        <li className={liCommonStyle} onClick={() => { setSideBar(false) }}>
          <NavLink
            title="Go to Downloads"
            className={({ isActive }) => isSidebar ? generateSidebarLinkClass(isActive) : generateNavLinkClass(isActive)}
            to='downloads'
            replace={true}
          >
            Downloads
          </NavLink>
        </li>
      )}
      {userType === 'villager' && (
        <>
          <li className={liCommonStyle} onClick={() => { setSideBar(false) }}>
            <NavLink
              title="Go to About"
              className={({ isActive }) => isSidebar ? generateSidebarLinkClass(isActive) : generateNavLinkClass(isActive)}
              to='about'
              replace={true}
            >
              About
            </NavLink>
          </li>
          <li className={liCommonStyle} onClick={() => { setSideBar(false) }}>
            <NavLink
              title="Go to Contacts"
              className={({ isActive }) => isSidebar ? generateSidebarLinkClass(isActive) : generateNavLinkClass(isActive)}
              to='contact'
              replace={true}
            >
              Contact
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const [glanceProfile, setGlanceProfile] = React.useState(false);

  const renderAuthButton = () => (
    isLoggedIn ? (
      <div className='relative' onMouseEnter={() => setGlanceProfile(true)} onMouseLeave={() => setGlanceProfile(false)}>
        <Link title='Go to Profile' to="profile" replace={true} className='w-12 h-12 grid place-items-center rounded-full bg-natural-100 border border-neutral-200'>
          <CgProfile size={32} color='#8AB740' />
        </Link>
        <div
          onMouseEnter={() => setGlanceProfile(true)}
          onMouseLeave={() => setGlanceProfile(false)}
          className={`absolute p-4 right-1/2 space-y-5 mt-2 border-2 border-neutral-200 bg-light-100 rounded-md origin-top-right ease-bounce duration-300 
          ${glanceProfile ? 'visible scale-100 opacity-100' : 'invisible scale-0 opacity-0'}`}
        >
          <p className='font-work text-lg text-center text-secondary'>
            Hello, <span className='font-semibold'>{userData.name.split(' ')[0]}</span>!
          </p>
          <div className='space-y-2 grid grid-rows-1 place-items-center'>
            <Button link={true} path='profile' color='color'>View Profile</Button>
            <div className='grid grid-cols-3 w-full place-items-center'>
              <div className='bg-gray-200 h-0.5 w-full' />
              <p className='font-gyst font-bold text-gray-200'>Or</p>
              <div className='bg-gray-200 h-0.5 w-full' />
            </div>
            <Button color='color' onClick={logout}>Logout</Button>
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
        className={`hidden w-full left-1/2 -translate-x-1/2 h-nav bg-light-100 fixed top-0 z-50
          justify-between items-center px-3 lg:px-4
          ${!showNavbar ? 'translate-y-nav' : 'translate-y-0'} 
          transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1)
          lg:flex`}
      >
        <Link title='Go to Home' replace={true} to='/'>
          <img src={logo} alt='TapSeva' className='' />
        </Link>
        <div className='flex gap-10 items-center'>
          <ul className='flex space-x-16 text-dark'>
            {renderLinks()}
          </ul>
          {renderAuthButton()}
        </div>
      </nav>
      <nav
        className={`w-full left-1/2 -translate-x-1/2 h-nav fixed top-0 z-50
          ${!showNavbar ? 'translate-y-nav' : 'translate-y-0'} 
          transition-transform duration-300 ease-bounce lg:hidden
        `}
      >
        <div className='flex w-full justify-between items-center px-3 lg:px-4 h-full bg-light-100 relative z-50'>
          {
            isLoggedIn ? (
              <NavLink
                to="profile" title='Go to Profile' replace={true}  //w-12 h-12 grid place-items-center rounded-full bg-natural-100 border border-neutral-200
                className={({ isActive }) => isActive ? 'w-12 h-12 grid place-items-center text-light-100 bg-primary rounded-full' : 'w-12 h-12 grid place-items-center border text-primary border-neutral-100 rounded-full'}>
                <CgProfile size={32} />
              </NavLink>
            ) : (
              <NavLink
                to="auth/signin" title='Sign In' replace={true}  //w-12 h-12 grid place-items-center rounded-full bg-natural-100 border border-neutral-200
                className={({ isActive }) => isActive ? 'w-12 h-12 grid place-items-center text-light-100 bg-primary rounded-full' : 'w-12 h-12 grid place-items-center border text-primary border-neutral-100 rounded-full'}>
                <CgProfile size={32} />
              </NavLink>
            )
          }
          <Link title='Go to Home' replace={true} to='/'>
            <img src={logo} alt='TapSeva' className='w-28' />
          </Link>
          <Ham task={() => setSideBar(!sideBar)} activeStatus={sideBar ? 'active' : ''} />
        </div>

        <div className={`sidebar z-40 relative min-h-screen w-full flex flex-col items-center justify-start bg-light-100 left-0 top-0 ease-bounce duration-500 ${sideBar ? 'transorm-3d-sidebar-active' : 'transorm-3d-sidebar'}`}> 
          <ul className='flex-col text-dark w-full p-5 space-y-4'>
            {renderLinks(true)}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
