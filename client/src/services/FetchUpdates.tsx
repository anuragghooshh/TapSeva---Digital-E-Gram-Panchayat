import UpdateInterface from '../interfaces/UpdateInterface';

const fetchUpdates = async (): Promise<UpdateInterface[]> => {
    try {
        const response = await fetch('/api/updates', {
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
        const tempUpdates: UpdateInterface[] = [...data];
        return tempUpdates;

    } catch (error) {
        console.error('Error:', error);
    }

    return [];
}

export default fetchUpdates;