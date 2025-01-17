import { Schema , model} from "mongoose";

const FoodSchema = new Schema({
    name:{type:Schema.Types.ObjectId},
    price:Number,
    image:String,
    ingredients:String,
    category: {type:Schema.Types.ObjectId, ref:"FoodCategory"},
}, {
    timestamps:true,
    versionKey: false 
});
export const Food = model('Food',FoodSchema,'foods');