import express, { urlencoded, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;
const mongodbURI:any = process.env.CON_STR;

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Node js is running...');
});


mongoose.connect(mongodbURI).then((res: any) => {
    app.listen(process.env.PORT, () => {
        console.log(`server started at ${PORT}`);

    });
}).catch((err)=>{
    console.log("Database Connection Faild");
    
})