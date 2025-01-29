import {Request, Response, Router,NextFunction } from "express";
import { verifyToken } from "@clerk/backend";
import { User } from "../models/user";

export const user = Router();

user.get("/",async (req:Request,res:Response)=>{
    const users = await User.find();
    res.json(users);
});

user.get("/:id",async (req:Request,res:Response)=>{
    const {id} =req.params;
    const user = await User.findById(id);
    res.json(user);
});

user.post("/",async (req:Request,res:Response)=>{
    const user = await User.create(req.body);
    res.json(user);
});

user.put("/:id",async (req:Request,res:Response)=>{
    const {id} =req.params;
    const user = await User.findByIdAndUpdate(id,req.body);
    res.json(user);
});

user.delete("/:id",async (req:Request,res:Response)=>{
    const {id} =req.params;
    const user = await User.findByIdAndDelete(id);
    res.json(user);
})