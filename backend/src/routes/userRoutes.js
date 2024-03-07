const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');


const router = express.Router();


// api/users/register
router.post("/register", [
  check("firstName", "first name is required").isString(),
  check("lastName", "last name is required").isString(),
  check("email", "email is required").isEmail(),
  check("password", "password is required").isLength({min: 8}),
], 
async (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }
  try{
    const users = await User.findOne({
      email: req.body.email,
  });

  if(users){
    return res.status(400).json({message: "user already exists"});
  }

  const  newUser = new User(req.body);
  await newUser.save();

  const token = jwt.sign(
    {userId: newUser.id},
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d",}
    );

    res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400000, // 1 hour expiration
    
    });
    return res.status(200).send({message: "User registered ok"});
  
  }
  catch (error){
    console.log(error);
    res.status(500).json({ message: "something wronge" });
  }
});


module.exports = router;