import {Schema } from "mongoose";

export const FoodOrderItemSchema = new Schema({
    food:{type:Schema.Types.ObjectId,ref:"Food"},
    quantity:Number
});