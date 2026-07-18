const axios = require("axios");
const Donation = require("../models/donationmodel");
exports.createOrder = async (req, res) => {
  try {
    const {amount,name,email,phone,message } = req.body;
const orderId = `order_${Date.now()}`;
await Donation.create({
      donorName: name,
      email,
      message,
      amount,
      orderId,
      status: "PENDING"
    });
    const orderData = {
      order_id: orderId,
      order_amount: Number(amount),
      order_currency: "INR",

      customer_details: {
        customer_id: `cust_${Date.now()}`,
        customer_name: name,
        customer_email: email,
        customer_phone: phone || "9999999999"
      },

      order_meta: {
        return_url:
          "http://localhost:5173/payment-success?order_id={order_id}"
      }
    };

    const response = await axios.post(
      "https://sandbox.cashfree.com/pg/orders",
      orderData,
      {
        headers: {
          "x-client-id": process.env.CASHFREE_CLIENT_ID,
          "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
          "x-api-version": "2023-08-01",
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);

  } catch (err) {
    console.log(err.response?.data || err.message);

    res.status(500).json({
      error: err.response?.data || err.message
    });
  }
};