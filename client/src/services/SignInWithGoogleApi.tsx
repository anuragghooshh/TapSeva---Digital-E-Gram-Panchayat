const SignInWithGoogleApi = async (idToken: string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/google`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idToken }),
        });
        return response.json();
    } catch (error) {
        throw new Error('Error during sign-in with Google');
    }
};

export default SignInWithGoogleApi;