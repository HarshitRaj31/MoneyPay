import React from 'react'
import './About.css'
import logo from './logo.jpeg'
const About = () => {
  return (
    <>
    <section className='about'>
     <div className="about-container">
        <div className="profile2">
            <img
            src={logo}
            alt="Harshit Raj"
          />
        </div>
        <div className="about-content">
            
          <h1>About</h1>

          <h2>Welcom to MoneyPay 👋</h2>

          <p>
            MoneyPay is a simple and secure donation website that makes it easy for people to support a good cause. With just a few clicks, you can make a donation safely through our trusted payment system.
          </p>

          <p>
            Our goal is to make online donations quick, transparent, and hassle-free. We also provide an admin dashboard to keep track of donations and manage records easily.
          </p>
            <h2>✨ Features</h2>
          <p>
            💳 Secure online donations with Cashfree Payment Gateway
          </p>
          <p>
            📊 Admin dashboard with donation analytics
          </p>
          <p>👤 Admin authentication using JWT</p>
          <p>📱 Responsive design for desktop and mobile</p>
          
           <div className="skills">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
           </div>
        </div>
     </div>
    </section>
</>
  )
}

export default About