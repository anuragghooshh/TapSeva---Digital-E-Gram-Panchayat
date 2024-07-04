import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import ServicesLayout from "./pages/services/Services"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Downloads from "./pages/downloads/Downloads"
import SignIn from "./pages/authenticate/SignIn"
import SignUp from "./pages/authenticate/SignUp"
import AuthLayout from "./pages/authenticate/AuthLayout"
import SignInLayout from "./pages/authenticate/sign-in/SignInLayout"
import SignInWithEmail from "./pages/authenticate/sign-in/SignInWithEmail"
import SignInWithPhone from "./pages/authenticate/sign-in/SignInWithPhone"


function App() {
  // const [data, setData] = React.useState<object>({});

  // React.useEffect(() => {
  //   fetch("/api/services")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  // console.log(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesLayout />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="downloads" element={<Downloads />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="signin" element={<SignInLayout />}>
            <Route path="email" element={<SignInWithEmail />} />
            <Route index element={<SignInWithPhone />} />
          </Route>
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
