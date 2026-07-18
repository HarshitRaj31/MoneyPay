const Donation = require("../models/Donationmodel");

exports.getDashboard = async (req, res) => {

   try {
    // Only successful donations
    const donations = await Donation.find({ status: "SUCCESS" }).sort({
      createdAt: -1,
    });


    const totalAmount = donations.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    res.json({

        totalDonations: donations.length,

        totalAmount,

        donations

    });
   }
   catch (err) {
  console.error("Dashboard Error:", err);
  res.status(500).json({
    message: "Server Error",
    error: err.message,
  });
}
};