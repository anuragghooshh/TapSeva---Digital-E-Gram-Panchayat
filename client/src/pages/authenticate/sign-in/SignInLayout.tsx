import signInBG from '../../../assets/images/signInBg.jpg';
import { Outlet } from 'react-router-dom'
import SignInWithGoogle from '../../../components/signInWithGoogle/SignInWithGoogle'

const SignInLayout = () => {
    return (
        <section className='pb-20' id='signIn'>
            <div className='max-w-dsktp mx-auto flex border-2 border-gray'>
                <Outlet />
                <div 
                    className='p-10 basis-2/5 w-full flex items-center justify-center bg-center bg-cover bg-no-repeat'
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
