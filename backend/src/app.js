import express from 'express'
import taskRoutes from './route/task.routes.js'
import authRoutes from './route/auth.routes.js'
import adminRoutes from './route/admin.routes.js'
import cors from 'cors'

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";


const app = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1/auth' ,authRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/tasks', taskRoutes);
app.get('/',(req,res)=>{
    res.json({message:"Hello world"})
});

export default app;


// admin token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NzlhMTk4NTU0YzM0N2VlZGU0YWUyMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzY5NTc4OTA0LCJleHAiOjE3Njk2NjUzMDR9.AEf-0jgnSIKoORrG095FQOmZeKrDxazv1Fiz9danAQo