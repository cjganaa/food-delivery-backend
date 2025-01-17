import { CANCELLED } from "dns";
import { Schema} from "mongoose";

export const FoodOrderStatusEnum = new Schema({
    PENDING:'PENDING',
    CANCELLED:'CANCELLED',
    DELIVERED:'DELIVERED'
});