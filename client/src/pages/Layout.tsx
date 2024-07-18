import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'
import ApplicationForm from '../components/forms/ApplicationForm'

const Layout = () => {
    return (
        <div id='container' className='w-full bg-light px-5'>
            <ApplicationForm/>
            <NavBar />
            <Outlet />
            {/* <Footer />  */}
        </div>
    )
}

export default Layout
