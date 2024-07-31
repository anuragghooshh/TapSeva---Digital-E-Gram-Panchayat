import React from 'react'
import UserDataInterface from '../../interfaces/UserDataInterface'

interface UserContextInterface {
    users: UserDataInterface[],
    setUsers: React.Dispatch<React.SetStateAction<UserDataInterface[]>>
}

const UserContext = React.createContext<UserContextInterface>({
    users: [],
    setUsers: () => {}
});

export default UserContext;