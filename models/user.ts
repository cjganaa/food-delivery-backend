import { Schema , model} from "mongoose";
import { UserRoleENum } from "./user-role-enum";

const UserSchema = new Schema({
    email:String,
    password:String,
    phoneNumber:String,
    address:String,
    role: UserRoleENum,
    orderedFoods: [{type:Schema.Types.ObjectId, ref:"FoodOrder"}],
    isVerified:Boolean
}, {
    timestamps:true,
    versionKey: false 
});
UserSchema.set('toJSON',{virtuals: true,transform: function (doc, ret) {   delete ret._id,ret.__v  }});
export const User = model('Food',UserSchema,'foods');