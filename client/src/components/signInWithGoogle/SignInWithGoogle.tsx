import React from 'react'
import Button from '../button/Button'
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

const SignInWithGoogle = () => {

    const handleSignIn = async () => {
        console.log("SIGN IN WITH GOOGLE PRESSED");

        try {
            const result = await signInWithPopup(auth, provider);
            const token = await result.user.getIdToken();
            console.log('Token:', token)

            // Send the token to your backend
            await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idToken: token }),
            }).then((res) => res.json()).
                then((data) => {
                    localStorage.setItem('token', data.token);
                    console.log('Sign-in successful, token saved:', data.token);
                }).
                catch((error) => console.error('Error:', error));

        } catch (error) {
            console.error('Error during sign-in:', error);
        }

        //Testing
        // const response = await fetch('/api/auth/google',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // });

        // const data = await response.json();

        // if(response.ok){
        //     console.log('BACKEND WORKING', data);
        // }
    };


    return (
        <Button color='light' onClick={handleSignIn} >Sign in with Google</Button>
    )
}

export default SignInWithGoogle
