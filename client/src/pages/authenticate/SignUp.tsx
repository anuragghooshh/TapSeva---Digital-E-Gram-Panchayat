import SignUpForm from '../../components/forms/signUpForm/SignUpForm'
import SignInWithGoogle from '../../components/signInWithGoogle/SignInWithGoogle';
import signInBG from '../../assets/images/signInBg.jpg';

const SignUp = () => {
  return (
    <section className="py-10" id='signUp'>
      <div className='max-w-dsktp mx-auto flex flex-col-reverse md:flex-row border-2 border-gray-100 rounded-md overflow-hidden'>
        <SignUpForm />
        <div
          className='p-10 basis-2/5 w-full flex items-center justify-center bg-img'
          style={{
            backgroundImage: `url('${signInBG}')`
          }}
        >
          <SignInWithGoogle />
        </div>
      </div>
    </section>
  )
}

export default SignUp
