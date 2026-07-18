import React from 'react'
import './About.css'
import har from './Harshit.jpeg'
const About = () => {
  return (
    <>
    <section className='about'>
     <div className="about-container">
        <div className="profile2">
            <img
            src={har}
            alt="Harshit Raj"
          />
        </div>
        <div className="about-content">
            
          <h1>About Me</h1>

          <h2>Hi, I'm Harshit Raj 👋</h2>

          <p>
            I'm a passionate Full Stack Developer who enjoys building
            modern web applications using React, Node.js, Express,
            and MongoDB.
          </p>

          <p>
            I love creating projects that solve real-world problems,
            learning new technologies, and sharing my knowledge with
            others.
          </p>

          <p>
            If you enjoy my work and would like to support my journey,
            your contribution helps me continue building projects and
            learning new skills.
          </p>
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