import React from 'react'

const AuthContext = React.createContext({
  isLoggedIn : false,
  userType : 'default' || 'admin'
})

const AuthContextProvider = ({children} : {children : React.ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userType, setUserType] = React.useState('user');

  return (
    <AuthContext.Provider value={{isLoggedIn,userType}} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
export{ AuthContext }