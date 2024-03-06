const express = require('express');
const cors = require('cors');
require('dotenv').config();
//const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require("./routes/auth");
const cookieParser = require("cookie-parser");
const path = require('path');



//dotenv.config();

//console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);


const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));


app.use(express.static(path.join(__dirname, "../../frontend/dist")));
// app.get("/api/test", async (req , res)=>{
// res.json({message: "hello from express endpoint"})
// });

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(7000, ()=>{
  console.log("server running on localhost:7000");
})

