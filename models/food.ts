import { Schema , model} from "mongoose";

const FoodSchema = new Schema({
    name:String,
    price:Number,
    image:String,
    ingredients:String,
    category: {type:Schema.Types.ObjectId, ref:"FoodCategory"},
}, {
    timestamps:true,
    versionKey: false 
});
export const Food = model('Food',FoodSchema,'foods');