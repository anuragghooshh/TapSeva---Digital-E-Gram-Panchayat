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
import Users from "./pages/users/Users"
import Updates from "./pages/updates/Updates"

function App() {
  const { isLoggedIn, userType } = React.useContext(AuthContext);

  const publicRoutes = (
    <>
      <Route path="services" element={<ServicesLayout />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="downloads" element={<Downloads />} />
    </>
  );

  const privateRoutes = isLoggedIn && (
    <>
      <Route path="applications" element={<Applications />} />
      <Route path="profile" element={<Profile />} />
    </>
  );

  const adminRoutes = userType === 'admin' && (
    <Route path="users" element={<Users />} />
  );

  const adminAndStaffRoutes = (userType === 'admin' || userType === 'staff') && (
    <Route path="updates" element={<Updates/>} />
  );

  const authRoutes = !isLoggedIn && (
    <Route path="auth" element={<AuthLayout />}>
      <Route path="signin" element={<SignInLayout />}>
        <Route path="email" element={<SignInWithEmail />} />
        <Route index element={<SignInWithPhone />} />
      </Route>
      <Route path="signup" element={<SignUp />} />
    </Route>
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={userType == 'villager' ? <Home /> : <Dashboard />} />
        {publicRoutes}
        {privateRoutes}
        {adminRoutes}
        {adminAndStaffRoutes}
      </Route>
      {authRoutes}
    </Routes>
  )
}

export default App