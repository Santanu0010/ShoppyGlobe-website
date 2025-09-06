
import mongoose from "mongoose";

//schema creation 
const userSchema = new mongoose.Schema({

    fullName:String,
    email:String,
    password:String

});


//model creation
const UserModel = mongoose.model("user", userSchema)

export default UserModel;