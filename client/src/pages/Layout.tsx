import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'

const Layout = () => {
    return (
        <div id='container w-full'>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout
