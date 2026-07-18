import React from 'react'
import './Dashboard.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
    const navigate = useNavigate();
    const [dashboard,setDashboard]=useState(null);
    const logout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};
    useEffect(()=>{
         const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }
        const fetchDashboard= async () => {
            try{
                const token=localStorage.getItem("token");
            const {data} = await axios.get(
                "http://localhost:5000/api/dashboard",
                {
                    headers:{
                        Authorization:`Bearer ${token}`,
                    },
                }
            );
            setDashboard(data);
            }catch(error){
               console.error("Dashboard Error:", error);
             if (error.response?.status === 401) {
             alert("Please login first.");
             window.location.href = "/login";
            }
        }
        };
        fetchDashboard();
    },[navigate]);
    if (!dashboard) {
        return <h2>Loading....</h2>
    }
  return (
    <>
    <div className='dashborad'>
        <div className="dashboard-header">
            <h1>Dashborad</h1>
            <button className='logout-btn' onClick={logout}>Log out</button>
        </div>
        <div className="cards">
            <div className="card">
                 <h3>Total Donations</h3>
          <h2>{dashboard.totalDonations}</h2>
            </div>
            <div className="card">
          <h3>Amount</h3>
          <h2>₹{dashboard.totalAmount}</h2>
        </div>
        <div className="card">
          <h3>Supporters</h3>
          <h2>{dashboard.totalDonations}</h2>
        </div>
        </div>
        <div className="recent">
            <h2>Recent</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {dashboard.donations.length>0?(
                        dashboard.donations.map((donation)=>(
                            <tr key={donation._id}>
                                <td >{donation.donorName}</td>
                                <td>{donation.amount}</td>
                                <td>{donation.message||"No message"}</td>
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan={"3"}>No donation yet.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Dashboard