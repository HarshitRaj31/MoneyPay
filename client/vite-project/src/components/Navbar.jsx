import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import logo from './logo.jpeg'
const Navbar = () => {
  return (
    <>
    <nav className='navbar'>

      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className='links'>
        <a href="#">Home</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </ul>
      <Link to="/login">
      <button className='support-btn'>❤️ Admin</button>
      </Link>
    </nav>
    </>
  )
}

export default Navbar