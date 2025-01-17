import {Request,Response, Router } from "express";
import { Food } from "../models/food";
import { FoodOrder } from "../models/food-order";

export const foodOrderItem = Router();

foodOrderItem.get("/",async (req:Request,res:Response)=>{
    res.json();
});