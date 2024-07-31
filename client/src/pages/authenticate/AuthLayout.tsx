import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'

const AuthLayout = () => {
    return (
        <div id='page' className='authenticate w-full bg-light-100 px-3 lg:px-4'>
            <section className="lg:py-20 md:py-16 py-12">
                <div className='max-w-dsktp mx-auto flex flex-col gap-10 items-start' >
                    <Link title='Go to Home' to='/' className='text-base font-work text-dark flex items-center gap-4' replace={true}>
                        <FaArrowLeftLong/>
                        Go Back
                    </Link>
                    <div className="toggle grid grid-cols-1 place-items-center items-center gap-2 md:flex w-full">
                        <NavLink
                            to="/auth/signin"
                            replace={true}
                            className={({ isActive }) =>
                                `
                                    text-base flex items-center justify-center gap-2 rounded-md lg:text-xl font-work py-3 px-2 lg:px-8 w-full text-center 
                                    ${isActive ? 'bg-secondary text-light-100' : 'bg-light-100 border border-neutral-200 text-dark'}
                                `
                            }
                        >
                            Sign In
                        </NavLink>
                        <p className='font-gyst font-medium text-base md:text-2xl text-dark mx-5'>Or</p>
                        <NavLink
                            to="/auth/signup" 
                            replace={true}
                            className={({ isActive }) =>
                                `
                                    text-base flex items-center justify-center gap-2 rounded-md lg:text-xl font-work py-3 px-2 lg:px-8 w-full text-center 
                                    ${isActive ? 'bg-secondary text-light-100' : 'bg-light-100 border border-neutral-200 text-dark'}
                                `
                            }
                        >
                            Create new account
                        </NavLink>
                    </div>
                </div>
            </section>
            <Outlet />
        </div>
    )
}

export default AuthLayout
