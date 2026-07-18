import React from 'react'
import './Contact.css'
import { useState } from 'react';
import axios from "axios";
const Contact = () => {
   const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    });
  };
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill all fields.");
      return;
    }
   try {
      await axios.post("http://localhost:5000/api/contact", form);
      alert("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <>
    <div className='contact'>
        <div className="contact-container">
            <div className="contact-info">
                <h1>Contact Me</h1>

          <p>
            Have a question, feedback, or a project idea?
            I'd love to hear from you.
          </p>
          <div className="info">
            <h3>📧 Email</h3>
            <p>harshit@example.com</p>
          </div>
          <div className="info">
            <h3>📍 Location</h3>
            <p>India</p>
          </div>
          <div className="info">
            <h3>💻 Availability</h3>
            <p>Open for Freelance & Collaboration</p>
          </div>

            </div>
            <div className="contact-form">
                <input type="text" name='name' placeholder='Your Name' value={form.name} onChange={handleChange}/>
                <input type="email" name='email' placeholder='Your Email' value={form.email} onChange={handleChange} />
                <input type="text"name='subject' placeholder='Subject' value={form.subject} onChange={handleChange}/>
                <textarea name='message' placeholder='Write your message....' value={form.message} onChange={handleChange}></textarea>
                <button onClick={handleSubmit}>Send Message</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact