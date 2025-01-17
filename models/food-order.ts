import { Schema , model} from "mongoose";
import { ObjectId } from "mongodb";
import { FoodOrderItemSchema } from "./food-order-item";
import { FoodOrderStatusEnum } from "./food-order-status-enum";

const FoodOrderSchema = new Schema({
    user: ObjectId,
    totalPrice: Number,
    foodOrderItems: [{type:FoodOrderItemSchema}],
    status: {type:FoodOrderStatusEnum},
}, {
    timestamps:true,
    versionKey: false 
});
FoodOrderSchema.set('toJSON',{virtuals: true,transform: function (doc, ret) {   delete ret._id,ret.__v  }});
export const FoodOrder = model('FoodOrder',FoodOrderSchema,'food-order');