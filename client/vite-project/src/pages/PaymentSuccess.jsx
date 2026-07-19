import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const orderId = searchParams.get("order_id");

        const { data } = await axios.get(
          `https://moneypay-nv0l.onrender.com/api/verify/${orderId}`
        );

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    verifyPayment();
  }, []);

  return (
    <div>
      <h1>🎉 Payment Successful</h1>
      <p>Thank you for your support ❤️</p>
    </div>
  );
};

export default PaymentSuccess;