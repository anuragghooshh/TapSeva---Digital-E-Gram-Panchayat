import React from 'react'
import UserContext from './UserContext'
import UserDataInterface from '../../interfaces/UserDataInterface';
import fetchUsers from '../../services/FetchUsers';

interface UserContextInterface {
    children: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextInterface> = ({ children }) => {
    const [users, setUsers] = React.useState<UserDataInterface[]>([]);

    
    
    React.useEffect(() => {
        fetchUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
