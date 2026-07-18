import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route, Routes} from 'react-router-dom'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ShowQR from './components/ShowQR'
import ProtectedRoute from './pages/ProtectRoute'
import PaymentSuccess from './components/PaymentSuccess'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/donate' element={<ShowQR/>}/>
        <Route path='/successful' element={<PaymentSuccess/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
        <Route path='/payment-success' element={<PaymentSuccess/>}/>
      </Routes>
    </>
  )
}

export default App
