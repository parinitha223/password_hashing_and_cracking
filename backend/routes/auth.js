const express=require("express");
const router=express.Router();
const User=require("../models/User");

//SignUp API

router.post("/signup" , async(req,res) => {
    const {username,email,password}= req.body;
    const user=new User ({
        username,
        email,
        password
    });

    await  user.save();
    res.json({
        message:"User Saved"
    });

});

//login API

router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    console.log("Login input:", email, password);

    const user = await User.findOne({ email: email });

    console.log("User found:", user);

    if (!user) {
        return res.json({
            message: "User not found"
        });
    }

    if (user.password !== password) {
        return res.json({
            message: "Wrong password"
        });
    }

    res.json({
        message: "Login success"
    });

});

module.exports=router;
