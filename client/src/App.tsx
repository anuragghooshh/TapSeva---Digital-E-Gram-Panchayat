import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/home/Home"


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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
