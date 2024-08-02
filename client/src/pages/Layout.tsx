import { Outlet, useLocation } from 'react-router-dom'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import React from 'react'

const Layout = () => {
    const lenis = useLenis();
    const { pathname } = useLocation();

    React.useEffect(() => {
        lenis?.scrollTo(0, {
            immediate: true,
            force: true,
        });
    }, [pathname]);

    return (
        <div id='container' className='w-full bg-light-100 pt-nav pb-4 px-3 md:px-4'>
            <NavBar />
            <ReactLenis
                root
                options={{
                    lerp : 0.03,
                }}
            >
                <Outlet />
                <Footer />
            </ReactLenis>
        </div>
    )
}

export default Layout
