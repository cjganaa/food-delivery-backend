import {Request,Response, Router } from "express";
import { Food } from "../models/food";
import { FoodCategory } from "../models/food-category";

export const foodRouter = Router();

foodRouter.get("/",async (req:Request,res:Response)=>{
    const foods = await Food.find().populate('category');
    res.json(foods);
});

foodRouter.get("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const food = await Food.findById(id).exec();
    res.json(food);
});

foodRouter.post("/",async (req:Request,res:Response)=>{
    const food = await Food.create(req.body);
    const category = await FoodCategory.findById(req.body.category);
    let newCount:any = category?.count;
    newCount = newCount + 1;
    await FoodCategory.findByIdAndUpdate(category?._id, {count: newCount});
    res.json(food);
});

foodRouter.put("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const food = await Food.findByIdAndUpdate(id,req.body);
    if(food?.category != req.body.category){
        let category = await FoodCategory.findById(food?.category);
        let newCount:any = category?.count;
        newCount = newCount - 1;
        await FoodCategory.findByIdAndUpdate(category?._id, {count: newCount});
        category = await FoodCategory.findById(req.body.category);
        newCount = category?.count;
        newCount = newCount + 1;
        await FoodCategory.findByIdAndUpdate(category?._id, {count: newCount});
    }
    res.json(food);
});

foodRouter.delete("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const food = await Food.findByIdAndDelete(id);
    const category = await FoodCategory.findById(food?.category);
    let newCount:any = category?.count;
    newCount = newCount - 1;
    await FoodCategory.findByIdAndUpdate(category?._id, {count: newCount});
    res.json(food);
});