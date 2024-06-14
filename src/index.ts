import 'dotenv/config';
import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { product } from './routes/product.router';
import release from './routes/release.router';

const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.status(200).send('Node js is running...');
});

app.use("/api",product);
app.use('/api',release);

const connection_string:any=process.env.CNN_STR

mongoose.connect(connection_string).then((msg:any)=>{
    console.log(`Successfully connect to database...`);
    
}).catch((err:any)=>{
    console.log(err);
    
});
app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`);
    
});