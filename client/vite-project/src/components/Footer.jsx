import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'
import About from './About';
import logo from './image.jpeg';
const Footer = () => {
  return (
    <footer className='footer'>
    <div className='hero'>
      <div className="over">
      <img src={logo} alt="" />
      <p>Made by Harshit Raj</p>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="acounts">
        <a href="https://github.com/HarshitRaj31"  target="_blank"
  rel="noopener noreferrer"><FaGithub />GitHub</a>
        <a href="https://www.linkedin.com/in/harshit-raj-a76b93329"
  target="_blank"
  rel="noopener noreferrer"><FaLinkedin/>LinkedIn</a>
        <a href="https://www.instagram.com/harshitraj2206/"  target="_blank"
  rel="noopener noreferrer"><FaInstagram/>Instagram</a>
      </div>
    </div>
    <hr />
    <p className='copyright'>© {new Date().getFullYear()} MoneyPay. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer