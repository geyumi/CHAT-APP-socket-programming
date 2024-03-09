import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute = async  (req,res,next) =>{
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.ststus(401).json({error: "Unauthorized - No Token provided"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.ststus(401).json({error: "Unauthorized - Invalid Token"})
        }

        const user= await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.ststus(401).json({error: "User not found"})
        }

        req.user=user;
        
        next();

        
    } catch (error) {
        console.log("error in protectRoute Middleware :", error.message)
        res.status(500).json({error:"Internal server error"})
    }

}

export default protectRoute;