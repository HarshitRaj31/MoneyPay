const express=require("express");
const router=express.Router();
const {sendMessage}=require("../controllers/conatctController");
router.post("/",sendMessage);
module.exports=router;