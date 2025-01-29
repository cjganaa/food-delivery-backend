import { Schema , model} from "mongoose";

const UserSchema = new Schema({
    email:String,
    password:String,
    phoneNumber:String,
    address:String,
    role: {
        type:String,
        enum:["USER","ADMIN"],
        default:"USER",
    },
    orderedFoods: [{type:Schema.Types.ObjectId, ref:"FoodOrder"}],
    isVerified:Boolean
}, {
    timestamps:true,
    versionKey: false 
});

export const User = model('User',UserSchema,'user');