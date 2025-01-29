import {Request,Response, Router } from "express";
import { FoodOrder } from "../models/food-order";

export const foodOrder = Router();

foodOrder.get("/",async (req:Request,res:Response)=>{
    const orders = await FoodOrder.find();
    res.json(orders);
});

foodOrder.get("/:id",async (req:Request,res:Response)=>{
    const {id} =req.params;
    const orders = await FoodOrder.findById(id);
    res.json(orders);
});

foodOrder.post("/",async (req:Request,res:Response)=>{
    const orders = await FoodOrder.create(req.body);
    res.json(orders);
});

foodOrder.put("/:id",async (req:Request,res:Response)=>{
    const {id} =req.params;
    const orders = await FoodOrder.findByIdAndUpdate(id,req.body);
    res.json(orders);
});

foodOrder.delete("/:id",async (req:Request,res:Response)=>{
    const {id} =req.params;
    const orders = await FoodOrder.findByIdAndDelete(id);
    res.json(orders);
})