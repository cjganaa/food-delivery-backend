import {Request,Response, Router } from "express";
import { Food } from "../models/food";

export const foodRouter = Router();

foodRouter.get("/",async (req:Request,res:Response)=>{
    const categories = await Food.find();
    res.json(categories);
});

foodRouter.get("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const category = await Food.findById(id).exec();
    res.json(category);
});

foodRouter.post("/",async (req:Request,res:Response)=>{
    const category = new Food(req.body);
    await category.save();
    res.json(category);
});

foodRouter.put("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const category = await Food.findByIdAndUpdate(id,req.body,);
    res.json(category);
});

foodRouter.delete("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const category = await Food.findByIdAndDelete(id);
    res.json(category);
});