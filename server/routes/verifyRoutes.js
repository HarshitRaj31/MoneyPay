const express = require("express");
const router=express.Router();

const {verifyPayment}= require("../controllers/verifyController");

router.get("/verify/:orderID",verifyPayment);

module.exports=router;