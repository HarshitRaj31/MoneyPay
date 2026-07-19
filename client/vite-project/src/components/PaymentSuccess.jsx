import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const PaymentSuccess = () => {
     const [search] = useSearchParams();

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
    <h1>Payment Successful ❤️</h1></>
  )
}

export default PaymentSuccess