import React,{useState} from 'react'
import './Home.css'
import vid from '../components/video2.mp4'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";
import ShowQR from '../components/ShowQR'
const Home = () => {
  const [message, setMessage] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [amount, setAmount] = useState(50);
const [phone, setPhone] = useState("");
const [loading, setLoading] = useState(false);

  const handlePayment=async () => {
    if (!name||!email||!phone) {
    alert("Please enter your name and email.");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return;
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
  alert("Please enter a valid 10-digit phone number.");
  return;
}
    try {
      setLoading(true);
      const { data } = await axios.post(
      "https://moneypay-nv0l.onrender.com/api/payment/create-order",
      {
        name,
        email,
        message,
        phone,
        amount,
      }
    );

    const cashfree = await load({
      mode: "sandbox",
    });

    cashfree.checkout({
      paymentSessionId: data.payment_session_id,
      redirectTarget: "_self",
    });
    } catch (error) {
  console.error("Payment Error:", error);
  if (error.response) {
    console.log(error.response.data);
    alert(JSON.stringify(error.response.data));
  } else {
    alert(error.message);
  }
}
    finally{
    setLoading(false);
    }
  }
  return (
    <>
    <Navbar/>
    <div className='home'>
        <video
        className="background-video"
        src={vid}
        autoPlay
        loop
        muted
        playsInline
      />
        <div className="overlay">
            <div className="profile">
             
         <h1 className='name'>Harshit Raj</h1>
         <p>Hello I am Web Developer</p>
         <span>Your support helps me build more amazing projects ❤️</span>
            </div>
            <div className="donation">
             
                <textarea placeholder='Write a message...' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <input
  type="text"
  placeholder="Enter Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<input
  type="tel"
  placeholder="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
/>
                 <input type="email" placeholder='Enter Your Email'  value={email}  onChange={(e) => setEmail(e.target.value)}/>
             <div className="amounts">
                <button disabled={loading} className={amount === 50 ? "active" : ""}onClick={() => setAmount(50)}>₹50</button>
                <button disabled={loading} className={amount === 100 ? "active" : ""}onClick={() => setAmount(100)}>₹100</button>
                <button disabled={loading} className={amount === 200 ? "active" : ""}onClick={() => setAmount(200)}>₹200</button>
                <button disabled={loading} className={amount === 500 ? "active" : ""}onClick={() => setAmount(500)}>₹500</button>
             </div>
             
                <button className="donation-btn" onClick={handlePayment} disabled={loading}> {loading ? "Processing..." : "Donate Now"}</button>
             
            </div>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default Home