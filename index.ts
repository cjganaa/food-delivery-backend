import { create } from 'domain';
import { configDotenv } from 'dotenv';
import express, {Request,Response} from 'express';
import { MongoClient} from 'mongodb';
import { foodCategoryRouter } from './router/food-category';
import { foodRouter } from './router/food';
import { foodOrderItem } from './router/food-item';

const PORT = 8000;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

configDotenv();

const URI = String(process.env.MONGODB_URI);

async function connectToMongoDB() {
    await mongoose.connect(URI);
    console.log("Connected mongoose")
}
connectToMongoDB().catch(err => console.log(err));

app.use(express.json());

app.use("/food-category/",foodCategoryRouter); 
app.use("/food/",foodRouter);
app.use("/food-order-item/",foodOrderItem)

app.get("/",async (req:Request,res:Response)=>{
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`Server PORT:${PORT}`);
});