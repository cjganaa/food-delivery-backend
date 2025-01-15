import { Schema , model} from "mongoose";
import { ObjectId } from "mongodb";

const FoodSchema = new Schema({
    name:String,
    price:Number,
    image:String,
    ingredients:String,
    category: ObjectId,
}, {
    timestamps:true,
    versionKey: false 
});
export const Food = model('Food',FoodSchema,'foods');