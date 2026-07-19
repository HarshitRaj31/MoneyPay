import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './PaymentSuccess.css'
const PaymentSuccess = () => {
     const [search] = useSearchParams();
const navigate = useNavigate();
    useEffect(() => {

        const verify = async () => {

            const orderId = search.get("order_id");

            const { data } = await axios.get(
                `https://moneypay-nv0l.onrender.com/api/payment/verify/${orderId}`
            );

            console.log(data);

        };

        verify();

    }, []);
  return (
    <>
   <div className="payment-success">
    <div className="success-card">
      <div className="success-icon">✓</div>

      <h1>Payment Successful</h1>

      <p>
        Thank you for your support ❤️
        <br />
        Your donation has been received successfully.
      </p>

      <button
        className="dashboard-btn"
        onClick={() => navigate("/dashboard")}
      >
        Return to Dashboard
      </button>
    </div>
  </div></>
    
  )
}

export default PaymentSuccess