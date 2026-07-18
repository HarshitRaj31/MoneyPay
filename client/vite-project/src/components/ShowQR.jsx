import React from 'react'
import { useState } from 'react';
import axios from "axios";
import './ShowQR.css';
const ShowQR = () => {
    const [qrCode,setqrCode]= useState("");
    const [loading,setloading]=useState(false);

    const handleShow=async ()=>{
        try {
            setloading(true);
const { data } = await axios.post(
            "http://localhost:5000/api/payment/create-order",
            {
                name,
                email,
                phone: "9999999999",
                amount
            }
        );
         setQrCode(data.qr_code);
        } catch (error) {
            console.error(error);
            alert("Unable to generate QR Code");
        }
        finally{
            setloading(false);
        }
    }
  return (
    <>
    <div className="qr-container">
        <button className="qr-btn" onClick={handleShow}>
            {loading ?"Generating...":"Show UPI QR"}
        </button>
        {qrCode &&(
            <div className="qr-box">
                 <img src={qrCode} alt="UPI QR Code" />
          <p>Scan using any UPI App</p>
            </div>
        )}
    </div>
    </>
  )
}

export default ShowQR