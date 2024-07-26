import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';
import UserDataInterface from '../../interfaces/UserDataInterface';

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userType, setUserType] = React.useState<'villager' | 'admin' | 'staff'>('villager');
  const [userData, setUserData] = React.useState({} as UserDataInterface);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserData({} as UserDataInterface);
    setUserType('villager');
    navigate('/');
  };

  const login = (data: UserDataInterface, token : string ) => {
    setIsLoggedIn(true);
    setUserData(data);
    setUserType(data.role);
    localStorage.setItem('token', token);
  };

  const loginWithGoogle = async () => {
    navigate('/');
    await fetchUserData();
  };

  const fetchUserData = React.useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch('/api/user/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        login(data,token);
      } else {
        console.error('Failed to fetch user details:', data.msg);
        logout();
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      logout();
    }
  }, []);

  React.useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, userData, logout, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
