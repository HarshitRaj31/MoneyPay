const express=require("express");
const cors=require("cors");
const authRoutes=require("./routes/authRoutes");
const paymentRoutes=require("./routes/paymentRoutes")
const verifyRoutes=require("./routes/verifyRoutes");
const dashboardRoutes= require("./routes/dashboardRoute");
const adminAuthRoutes=require("./routes/adminAuthRoutes");
const contactRoutes=require("./routes/contactRoutes");
const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/payment",paymentRoutes);
app.use("/api/payment",verifyRoutes);
app.use("/api/dashboard",dashboardRoutes);
app.use("/api/admin",adminAuthRoutes);
app.use("/api/contact",contactRoutes);
module.exports=app;