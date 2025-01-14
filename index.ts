import { create } from 'domain';
import { configDotenv } from 'dotenv';
import express, {Request,Response} from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const PORT = 8000;
const app = express();
const mongoose = require('mongoose');

configDotenv();
const URI = String(process.env.MONGODB_URI);
console.log(URI);

const client = new MongoClient(URI);

async function connectToMongoDB() {
    await mongoose.connect(URI);
    console.log("Connected mongoose")
}
/*
async function run() {
    try {
        const database = client.db('food-delivery');
        const movies = database.collection('food-category');
        const query = { categoryName: "Fast food" };
        const categories = await movies.insertOne(query);
        console.log(categories);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
*/
//Mongoose
connectToMongoDB().catch(err => console.log(err));

const FoodCategorySchema = new mongoose.Schema({
    name: String,
    createdAt: Date,
    updatedAt: Date
});

const FoodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    ingredients: String,
    createdAt: Date,
    updatedAt: Date
})

const FoodOrderItemSchema = new mongoose.Schema({
    food: ObjectId,
    quantity: Number
});

const FoodOrderSchema = new mongoose.Schema({
    user:ObjectId
});

const FoodCategory = mongoose.model('FoodCategory',FoodCategorySchema,'food-category');
/* Example save to mongoDB using mongoose
const coffee = new FoodCategory({name:"Latte"});

console.log(coffee);
async function saving() {
    await coffee.save();
}
saving();
*/


app.use(express.json());

app.get("/",async (req:Request,res:Response)=>{
    res.send("hello");
});

app.get("/food-category",async (req:Request,res:Response)=>{
    const categories = await FoodCategory.find();
    res.json(categories);
});

app.get("/food-category/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const category = await FoodCategory.findById(id).exec();
    res.json(category);
});

app.post("/food-category",async (req:Request,res:Response)=>{
    const category = new FoodCategory(req.body);
    await category.save();
    res.json(category);
});

app.put("/food-category/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const category = await FoodCategory.findByIdAndUpdate(id,req.body,);
    res.json(category);
});

app.delete("/food-category/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const category = await FoodCategory.findByIdAndDelete(id);
    res.json(category);
});



app.listen(PORT, () => {
    console.log(`Server PORT:${PORT}`);
});