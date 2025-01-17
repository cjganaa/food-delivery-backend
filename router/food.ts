import {Request,Response, Router } from "express";
import { Food } from "../models/food";
import { FoodCategorySchema } from "../models/food-category";
import { Schema } from "mongoose";

export const foodRouter = Router();

foodRouter.get("/",async (req:Request,res:Response)=>{
    const foods = await Food.find().populate('category').select('category');
    const category:any = foods[0].category;
    console.log(category.name);
    res.json(foods);
});

foodRouter.get("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const food = await Food.findById(id).exec();
    res.json(food);
});

foodRouter.post("/",async (req:Request,res:Response)=>{
    const food = await Food.create(req.body);
    res.json(food);
});

foodRouter.put("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const food = await Food.findByIdAndUpdate(id,req.body,);
    res.json(food);
});

foodRouter.delete("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const food = await Food.findByIdAndDelete(id);
    res.json(food);
});