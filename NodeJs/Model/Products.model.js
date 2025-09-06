import mongoose from "mongoose";

//schema creation 
const productsSchema = new mongoose.Schema({
    "images" : [String], 
    "title": { type: String, required: true },
    "price": { type: Number, required: true},
    "discountPercentage":Number,
    "warrantyInformation":String,
    "availabilityStatus":String,
    "shippingInformation":String,
    "description": { type: String, required: true },

});


//model creation
const ProductModel = mongoose.model("Products", productsSchema)

export default ProductModel;