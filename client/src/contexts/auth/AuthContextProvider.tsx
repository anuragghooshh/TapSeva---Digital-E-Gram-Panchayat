import React from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

interface userDataInterface {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  aadhaarNo: string;
  dob: string;
  maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
}

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userType, setUserType] = React.useState('villager');
  const [userData, setUserData] = React.useState({} as userDataInterface);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserData({} as userDataInterface);
    navigate('/');
  };

  const login = (token: string, data: any) => {
    setIsLoggedIn(true);
    setUserData({
      _id: data._id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      aadhaarNo: data.aadhaarNo,
      dob: data.dob,
      maritalStatus: data.maritalStatus,
    });
    setUserType(data.role);
    localStorage.setItem('token', token);
  }


  React.useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const response = await fetch('/api/auth/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        if (response.ok) {
          login(token, data);
        } else {
          console.error('Failed to fetch user details:', data.msg);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, userData, logout }} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider; 