import bcrypt from "bcryptjs"
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async(req,res) => {
    try {
        const {fullname,username,password,confirmPassword,gender}= req.body;
        if(password!==confirmPassword){
            return res.status(400).json({error:"Password do not match"})

        }

        const user= await User.findOne({username})



        
        if(user){
            return res.status(400).json({error:"Username already exists"})
        }


        //HASH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt)


        //https://avatar-placeholder.iran.liara.run/
        const boyProfilePic='https://avatar.iran.liara.run/public/boy?username=${username}'
        const girlProfilePic='https://avatar.iran.liara.run/public/girl?username=${username}'

        const newUser = new User(
            {
                fullname,
                username,
                password:hashedPassword,
                gender,
                profilePic:gender === "male" ? boyProfilePic : girlProfilePic

            }
        )

       if (newUser){
        //generate AWT token
     generateTokenAndSetCookie(newUser._id,res)

        await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
       }
       else{
        res.status(400),json({error:"invvalid user data"})
       }

    } catch (error) {
        console.log("error in signup controller",error.message)
        res.status(500).json({error:"Internal server error"})
    }
    
}

export const login = (req,res) => {
    res.send("login usrrrrrr")
    console.log("loginUser");
}


export const logout = (req,res) => {
    console.log("logoutUser");
}