const axios = require("axios");
const Donation = require("../models/donationModel");

exports.verifyPayment = async (req, res) => {
  try {

    const { orderId } = req.params;

    const response = await axios.get(
      `https://sandbox.cashfree.com/pg/orders/${orderId}`,
      {
        headers: {
          "x-client-id": process.env.CASHFREE_CLIENT_ID,
          "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
          "x-api-version": "2023-08-01"
        }
      }
    );

    const order = response.data;
     console.log(order);
    if (order.order_status === "PAID") {

       await Donation.findOneAndUpdate(
        { orderId: order.order_id },
        {
          status: "SUCCESS",
          paymentId: order.cf_order_id,
        }
      );

      return res.json({
        success: true,
        order
      });
    }
    await Donation.findOneAndUpdate(
      { orderId: order.order_id },
      {
        status: "FAILED",
      }
    );
    res.json({
      success: false,
      order
    });
  } catch (err) {
    console.error("Verification Error:");
    console.log(err.response?.data || err);
    res.status(500).json({
      message: "Verification Failed",
       error: err.response?.data || err.message,
    });

  }
};