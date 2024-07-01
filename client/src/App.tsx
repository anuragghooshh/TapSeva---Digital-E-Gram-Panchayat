import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import ServicesLayout from "./pages/services/Services"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Downloads from "./pages/downloads/Downloads"


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
          <Route path="services" element={<ServicesLayout/>}>
            
          </Route>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="downloads" element={<Downloads/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
