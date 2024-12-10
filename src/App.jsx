import { BrowserRouter, Route, Routes } from "react-router-dom"
//Pages
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import PostsList from "./pages/PostsList/PostsList.jsx"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/posts" element={<PostsList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App