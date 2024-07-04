import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import AuthContextProvider from '../contexts/AuthContextProvider'

const Layout = () => {

    
    return (
        <AuthContextProvider>
            <div id='container' className='w-full bg-light'>
                <NavBar />
                <Outlet />
                <Footer />
            </div>
        </AuthContextProvider>
    )
}

export default Layout
