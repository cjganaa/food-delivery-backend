import {Request, Response, Router } from "express";
import { FoodCategory } from "../models/food-category";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/",async (req:Request,res:Response)=>{
    const categories = await FoodCategory.find();
    res.json(categories);
});

foodCategoryRouter.get("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const category = await FoodCategory.findById(id).exec();
    res.json(category);
});

foodCategoryRouter.post("/",async (req:Request,res:Response)=>{
    const category = await FoodCategory.create(req.body);
    res.json(category);
});

foodCategoryRouter.put("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const category = await FoodCategory.findByIdAndUpdate(id,req.body,);
    res.json(category);
});

foodCategoryRouter.delete("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const category = await FoodCategory.findByIdAndDelete(id);
    res.json(category);
});