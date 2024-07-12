import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import ServicesLayout from "./pages/services/Services"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Downloads from "./pages/downloads/Downloads"
import SignUp from "./pages/authenticate/SignUp"
import AuthLayout from "./pages/authenticate/AuthLayout"
import SignInLayout from "./pages/authenticate/sign-in/SignInLayout"
import SignInWithEmail from "./pages/authenticate/sign-in/SignInWithEmail"
import SignInWithPhone from "./pages/authenticate/sign-in/SignInWithPhone"
import Applications from "./pages/applications/Applications"
import Profile from "./pages/profile/Profile"
import Dashboard from "./pages/dashboard/Dashboard"
import AuthContext from "./contexts/auth/AuthContext"


function App() {
  // const [data, setData] = React.useState<object>({});

  // React.useEffect(() => {
  //   fetch("/api/services")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  // console.log(data);
  const { isLoggedIn, userType } = React.useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={userType != 'admin' ? <Home /> : <Dashboard />} />
        <Route path="services" element={<ServicesLayout />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="downloads" element={<Downloads />} />
        {
          isLoggedIn ?
            <Route path="applications" element={<Applications />} /> : null
        }
        {
          isLoggedIn ?
            <Route path="profile" element={<Profile />} /> : null
        }
      </Route>
      {
        !isLoggedIn ?
          <Route path="auth" element={<AuthLayout />}>
            <Route path="signin" element={<SignInLayout />}>
              <Route path="email" element={<SignInWithEmail />} />
              <Route index element={<SignInWithPhone />} />
            </Route>
            <Route path="signup" element={<SignUp />} />
          </Route> : null
      }
    </Routes>
  )
}

export default App
