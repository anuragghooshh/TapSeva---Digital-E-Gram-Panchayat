import React from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    userType: 'villager' || 'admin',
    userData: {
        _id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        aadhaarNo: '',
        dob: '',
        maritalStatus: '',
    },
    logout: () => { },
    loginWithGoogle: () => { },
})

export default AuthContext;