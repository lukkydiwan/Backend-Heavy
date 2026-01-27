import jwt from 'jsonwebtoken'
import User from '../model/User.js'

export const authMiddleware = async(req , res ,next)=>{
    try{
        const header = req.headers.authorization;

        if(!header || !header.startsWith('Bearer'))
         return res.status(401).json({message:"No token"})

        const token = header.split(' ')[1];
        const decode = jwt.verify(token,process.env.JWT_SECRET);

        const user = await User.findById(decode.id).select('-password');

        if(!user)
            return res.status(401).json({message:"no user found"})

        req.user = user;
        next();
    }catch(err){
        res.status(401).json({message:"Invalid token"})
    }
}