
import mongoose from "mongoose";

//schema creation 
const cartSchema = new mongoose.Schema({

    productId:String,
    quantity :Number,
    userId:String
    
});


//model creation
const CartModel = mongoose.model("CartItems", cartSchema)

export default CartModel;