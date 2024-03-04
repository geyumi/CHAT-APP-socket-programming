//const express= require("express");
import express from "express";  

//const dotenv=require("dotenv");
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
//create a express server
const app = express();

dotenv.config();

const PORT=process.env.PORT || 5000;


//when we go to the root route
app.get("/",(req,res) => {
  //root route http://localhost:5000/
  res.send("Hello world, server is ready");
});

// app.get("/api/auth/signup",(req,res)=>{
//     console.log("signup route");
// });

// app.get("/api/auth/login",(req,res)=>{
//     console.log("login route");
// });

// app.get("/api/auth/logout",(req,res)=>{
//     console.log("logout route");
// });

//we can use a middleware insteadd above 3
app.use("/api/auth/",authRoutes)

app.listen(PORT,() => console.log(`Server running on port ${PORT}`)); // server is running on this port