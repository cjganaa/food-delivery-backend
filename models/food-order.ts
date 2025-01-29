import { Schema , model,models} from "mongoose";
import { FoodOrderItemSchema } from "./food-order-item";

const FoodOrderSchema = new Schema({
    user: {type:Schema.Types.ObjectId, ref:"User"},
    totalPrice: Number,
    foodOrderItems: [FoodOrderItemSchema],
    status: {
        type:String,
        enum:["PENDING","CANCELED","DELIVERED"],
        default:"PENDING",
    },
}, {
    timestamps:true,
    versionKey: false 
});
export const FoodOrder = models['FoodOrder'] || model('FoodOrder',FoodOrderSchema,'food-order');