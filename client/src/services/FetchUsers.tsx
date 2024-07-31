import UserDataInterface from '../interfaces/UserDataInterface';

const fetchUsers = async (): Promise<UserDataInterface[]> => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch updates');
        }

        const data = await response.json();
        const tempUsers: UserDataInterface[] = [...data];
        return tempUsers;

    } catch (error) {
        console.error('Error:', error);
    }

    return [];
}

export default fetchUsers;