import React from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
  isLoggedIn: false,
  userType: 'default' || 'admin',
  userData: {
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

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userType, setUserType] = React.useState('villager');
  const [userData, setUserData] = React.useState({
    _id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    aadhaarNo: '',
    dob: '',
    maritalStatus: 'Single',
  });

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUserData({
      _id: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      aadhaarNo: '',
      dob: '',
      maritalStatus: 'Single',
    });
    navigate('/');
  };

  const login = (token: string, data: any) => {
    localStorage.setItem('token', token);
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
    navigate('/');
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

export { AuthContext, AuthContextProvider } 