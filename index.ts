import { create } from 'domain';
import { configDotenv } from 'dotenv';
import express, {Request,Response} from 'express';
import { MongoClient} from 'mongodb';
import { foodCategoryRouter } from './router/food-category';

const PORT = 8000;
const app = express();
const mongoose = require('mongoose');
configDotenv();

const URI = String(process.env.MONGODB_URI);

const client = new MongoClient(URI);

async function connectToMongoDB() {
    await mongoose.connect(URI);
    console.log("Connected mongoose")
}
connectToMongoDB().catch(err => console.log(err));

app.use(express.json());

app.use("/food-category/",foodCategoryRouter); 

app.get("/",async (req:Request,res:Response)=>{
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Server PORT:${PORT}`);
});