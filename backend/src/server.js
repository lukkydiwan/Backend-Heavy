import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import connecDb from './config/db.js'

const PORT = process.env.PORT || 5000;

connecDb();

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
