import { Outlet } from 'react-router-dom'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'

const Layout = () => {
    return (
        <div id='container' className='w-full bg-light-100 pt-nav pb-4 px-3 md:px-4'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
} 

export default Layout
