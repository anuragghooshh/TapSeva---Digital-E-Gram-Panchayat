import React from 'react';
import Button from '../button/Button';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import AuthContext from '../../contexts/auth/AuthContext';
import { FaGoogle } from 'react-icons/fa'

const SignInWithGoogle = () => {
  const { loginWithGoogle } = React.useContext(AuthContext);

  const handleSignIn = async () => {

    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();

      // Send the token to your backend
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken: token }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        loginWithGoogle();
      } else {
        console.error('Error during sign-in:', data.msg);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <Button color='light' onClick={handleSignIn}>
      <FaGoogle />
      Sign in with Google
    </Button>
  );
};

export default SignInWithGoogle;
