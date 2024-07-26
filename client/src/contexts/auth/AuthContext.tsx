import React from 'react'
import UserDataInterface from '../../interfaces/UserDataInterface';

interface AuthContextInterface {
    isLoggedIn: boolean;
    userType: 'villager' | 'admin' | 'staff';
    userData: UserDataInterface;
    logout: () => void;
    loginWithGoogle: () => void;
}

const AuthContext = React.createContext<AuthContextInterface>({
    isLoggedIn: false,
    userType: 'villager',
    userData: {
        _id: '',
        name: '',
        sex: '',
        email: '',
        phone: '',
        address: '',
        aadhaarNo: '',
        dob: '',
        maritalStatus: 'Single',
        role: 'villager',
    },
    logout: () => { },
    loginWithGoogle: () => { },
})

export default AuthContext;