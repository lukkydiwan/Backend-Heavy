import bcrypt from 'bcrypt'
import User from '../model/User.js'
import generateToken from '../utils/jwt.js'

export const register = async (req , res)=>{
    try{
        const {name,email,password} = req.body

    if(!name|| !email || !password)    
     return res.status(400).json({message:"All fields required"})

    const exist = await User.findOne({email});
    if(exist)
        return res.status(400).json({message:"User already exist"})
    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        name,email,password:hashedPassword
    });
    const token = generateToken(user._id , user.role)

    res.status(201).json({
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        }
    })

    }catch(err){
        console.error(err);
        res.status(500).json({message:err.message})
    }
}



export const login = async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password)
            return res.status(400).json({message:"All fields required"})
        const user = await User.findOne({email})

        if(!user)
            return res.status(400).json({message:"Inavlid credentials"})

        const correct = await bcrypt.compare(password,user.password)

        if(!correct)
            return res.status(400).json({message:"Inavlid credientials"})

        const token = generateToken(user._id , user.role);

        res.json({
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            }
        })

    }catch(err){
        console.error("Login error: ",err);
        res.status(500).json({message:err.message})
    }
}

export const getMe = async (req,res)=>{
res.json(req.user);
}