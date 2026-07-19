import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Home from './Home'
const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const login=async () => {
    try{
    const {data}=await axios.post(
    "https://moneypay-nv0l.onrender.com/api/admin/login",
     {
      email,
      password
     }
    );
    localStorage.setItem("token",data.token);
    navigate("/dashboard");
  }catch(error){
    alert(error.response?.data?.message||"Login failed");
  }
  };
  return (
    <>
    <div className='login'>
        <div className="login-card">
             <h1>Welcome Back 👋</h1>
        <p>Login to access your dashboard</p>
        <input type="email" placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className='login-btn' onClick={login}>Login</button>
        <hr />
        <button className='login-btn' onClick={() => navigate("/")}>Go Back to Home</button>
        </div>
    </div>
    </>
  )
}

export default Login