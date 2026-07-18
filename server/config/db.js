const mongoose=require("mongoose");

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected");
    }
    catch(err){
        console.error("not connected",err);
    }
}

module.exports=connectDB;