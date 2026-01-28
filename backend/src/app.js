import express from 'express'
import taskRoutes from './route/task.routes.js'
import authRoutes from './route/auth.routes.js'


const app = express()
app.use(express.json())

app.use('/api/v1/auth' ,authRoutes);
app.use('/api/v1/tasks', taskRoutes);
app.get('/',(req,res)=>{
    res.json({message:"Hello world"})
});

export default app;