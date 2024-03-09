//const express= require("express");
import express from "express";  

//const dotenv=require("dotenv");
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
//create a express server
const app = express();
const PORT=process.env.PORT || 5000;

dotenv.config();

app.use(express.json()) //extract the feilds from req body,to parse the incoming
                        //requests with json playlets(from req.body)

app.use(cookieParser())

//we can use a middleware insteadd above 3
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

//when we go to the root route
app.get("/",(req,res) => {
  //root route http://localhost:5000/
  res.send("Hello world, server is ready to");
});

app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}` // server is running on this port
)});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});
