import {Request, Response, Router,NextFunction } from "express";
import { FoodCategory } from "../models/food-category";
import { Food } from "../models/food";
import { verifyToken } from "@clerk/backend";

export const foodCategoryRouter = Router();

async function auth (req:Request,res:Response,next:NextFunction) {
    try{
        const token:any = req.get("token");
        const verified = await verifyToken(token,{
            secretKey:process.env.CLERK_SECRET_KEY
        });
        next();
    }
    catch{
        res.json({status:"Token Error"})
    }
}


foodCategoryRouter.get("/",async (req:Request,res:Response)=>{
    const categories = await FoodCategory.find();
    res.json(categories);
});

foodCategoryRouter.get("/:id",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const category = await FoodCategory.findById(id).exec();
    res.json(category);
});

foodCategoryRouter.get("/:id/foods",async (req:Request,res:Response)=>{
    const {id} = req.params;
    const foods = await Food.find({category:id});
    res.json(foods);
});

foodCategoryRouter.post("/",async (req:Request,res:Response)=>{
    const category = await FoodCategory.create({...req.body,count:0});
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