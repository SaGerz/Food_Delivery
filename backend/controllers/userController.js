import userModel from "../models/userModels.js" 
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// Login User : 
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    
    try {
        const user = await userModel.findOne({email});
        if(!user){
            res.json({status: false, message: "Users Doesn't exist"});
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.json({status:false, message: "Wrong Credential"});
        }
    
        const token = createToken(user._id);
        res.json({status: true, token});       
    } catch (error) {
        console.log(error);
        res.json({succes: false, message: "Error"})
    }
}

// Register User : 
const registerUser = async (req, res) => {
    const {name, password, email} = req.body;

    try {
        // validasi apakah email ini ada terdaftar :
        const exist = await userModel.findOne({email})
        if(exist) {
            return res.json({status: false, message: "User already exitst"})
        }
        
        // Validasi apakah email valid
        if(!validator.isEmail(email)){
            return res.json({
                status: false,
                message: "Please enter a valid email"
            })
        }
        
        // Password strong validator
        if(password.length < 8){
            return res.json({
                status: false,
                message: "Please enter a strong password"
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success: true, token})

    } catch (error) {
         console.log(error);
         res.json({succes: false, message: "Error"})
    }

}

export {loginUser, registerUser}