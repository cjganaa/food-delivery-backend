import { Schema,model } from "mongoose";

const FoodCategorySchema = new Schema({
    name: String,
}, {
    timestamps:true,
    versionKey: false 
});
export const FoodCategory = model('FoodCategory',FoodCategorySchema,'food-category');