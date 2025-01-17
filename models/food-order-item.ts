import { model, Schema } from "mongoose";

export const FoodOrderItemSchema = new Schema({
    food:{type:Schema.Types.ObjectId},
    quantity:Number
});
FoodOrderItemSchema.set('toJSON',{virtuals: true,transform: function (doc, ret) {   delete ret._id,ret.__v  }});
export const FoodOrderItem = model("FoodOrderItem",FoodOrderItemSchema,"food-order-item")