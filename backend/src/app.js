import express from 'express'
import authRoutes from './route/auth.routes.js'
const app = express()

app.use(express.json())

app.use('/api/v1/auth' ,authRoutes);

app.get('/',(req,res)=>{
    res.json({message:"Hello world"})
});

export default app;