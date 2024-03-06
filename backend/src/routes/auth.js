const express = require('express');
const User = require('../models/user');
const bcrypt = require("bcryptjs");
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const verifyToken = require("../middleware/auth.js");




const router = express.Router();

router.post("/login",[
  check("email", "email is required").isEmail(),
  check("password", "password with 8 or more characters required").isLength({min: 8}),
],
async (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  const { email, password } = req.body;

  try{
    const user = await User.findOne({email });
    if(!user){
      return res.status(400).json({message: "Invalid Credentials"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      return res.status(400).json({message: "Invalid Credentials"});
    }

    const token = jwt.sign(
      {userId: User.id},
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1d'}
      );

      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400000,  // 3 days expiration
      });
      res.status(200).json({userId: user.id})
  
  }
  catch (error){
    console.log(error);
    res.status(500).json({ message: "something wronge" });
  }


});

router.get("/validate-token", verifyToken, (req, res) => {
  res.status(200).send({ userId: req.userId });
});

router.post("/logout", (req, res) => {
  res.cookie("auth_token", "", {
    expires: new Date(0),
  });
  res.send();
});

module.exports = router;