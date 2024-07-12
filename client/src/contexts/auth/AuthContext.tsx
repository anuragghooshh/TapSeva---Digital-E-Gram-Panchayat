import React from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    userType: 'default' || 'admin',
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
    logout: () => { }
})

export default AuthContext;