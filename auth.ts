import {Request, Response,NextFunction } from "express";
import { verifyToken } from "@clerk/backend";

export async function auth (req:Request,res:Response,next:NextFunction) {
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