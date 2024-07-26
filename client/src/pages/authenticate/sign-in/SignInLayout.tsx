import signInBG from '../../../assets/images/signInBg.jpg';
import { Outlet } from 'react-router-dom'
import SignInWithGoogle from '../../../components/signInWithGoogle/SignInWithGoogle'

const SignInLayout = () => {
    return (
        <section className="py-10" id='signIn'>
            <div className='max-w-dsktp mx-auto flex flex-col-reverse lg:flex-row border-2 border-gray-100 rounded-md overflow-hidden'>
                <Outlet />
                <div 
                    className='p-10 basis-2/5 w-full flex items-center justify-center bg-img'
                    style={{
                        backgroundImage : `url('${signInBG}')`
                    }}
                >
                    <SignInWithGoogle/>
                </div>
            </div>

        </section>
    )
}

export default SignInLayout
