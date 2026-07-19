const Admin=require("../models/Admin");

const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async(req,res)=>{
try{
    const {email,password}=req.body;

    const admin=await Admin.findOne({email});

    if (!admin) {
        return res.status(404).json({
            message:"Admin not found"
        });
    }
     

    const match =await bcrypt.compare(
        password,
        admin.password
    );
    if (!match) {
        return res.status(400).json({
            message:"Invalid password"
        });
    }

    const token =jwt.sign(
        {
            id:admin._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );
    res.json({
        success:true,
        token,
        admin
    });
} catch(err){
    res.status(500).json({message:err.message});
}
};
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin already exists"
      });
    }
 const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
      email,
      password:hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      admin
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};