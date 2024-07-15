const FetchUserData = async (token:string) => {
    try {
        const response = await fetch('/api/auth/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return response.json();
    } catch (error) {
        throw new Error('Error fetching user details');
    }
};

export default FetchUserData
