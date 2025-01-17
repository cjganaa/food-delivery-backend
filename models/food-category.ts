import { Schema,model } from "mongoose";

export const FoodCategorySchema = new Schema({
    name: String,
}, {
    timestamps:true,
    versionKey: false, 
});
FoodCategorySchema.set('toJSON',{virtuals: true,transform: function (doc, ret) {   delete ret._id,ret.__v  }});

export const FoodCategory = model('FoodCategory',FoodCategorySchema,'food-category');