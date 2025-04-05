import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req,res) =>{
    try {
       const {fullname,email,password} = req.body
       const user = await User.findOne({email})
       if(user){
        return res.status(400).json({message:"User already exist"})
       }
       const hashedPassword = await bcryptjs.hash(password,10)
       const createdUser = new User({
        fullname,
        email,
        password:hashedPassword
       })
       await createdUser.save()
        res.status(200).json({message:"User created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email
        }})
    } catch (error) {
        console.log("Error", error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        else{
            res.status(200).json({message:"Login successful",user:{
                fullname:user.fullname,
                email:user.email,
                _id:user._id
            }})
        }
    } catch (error) {
        console.log("Error", error.message)
        res.status(500).json({message:"Internal server error"})
    }
}