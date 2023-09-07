import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blog from './pages/Blog'
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='store' element={<OurStore/>}/>
              <Route path='blogs' element={<Blog/>}/>
              <Route path='compare-product' element={<CompareProduct/>}/>
              <Route path='wishlist' element={<Wishlist/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='signup' element={<SignUp/>}/>
              <Route path='forgot-password' element={<ForgotPassword/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App


// 5:40:07 