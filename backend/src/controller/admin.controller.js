import User from '../model/User.js'

export const getAllUsers = async (req , res)=>{
    try{
        const user = await User.find().select('-password')
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message:err.message})
    }
} 