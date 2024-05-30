import 'dotenv/config';
import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.status(200).send('Node js is running...');
});

app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`);
    
});