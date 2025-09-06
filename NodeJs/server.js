import express from "express";
import mongoose from "mongoose";
import { productRoutes } from "./Routes/Products.route.js";
import { cartRoutes } from "./Routes/Cart.route.js";
import { userRoutes } from "./Routes/User.routes.js";

const app = new express();

//parsing json body
app.use(express.json());

const port = 6030;//custom port 

app.listen(port,() =>{
    console.log(`server is running on port ${port}`)
})

//mongoose.connect("mongodb://localhost:27017");
mongoose.connect("mongodb+srv://santanuchatterjeekonnagar_db_user:6vBU4yCFLnLWk2Vl@cluster0.pq4bllz.mongodb.net/");
const db = mongoose.connection;

app.use((req,res,next) =>{
    console.log("requested method name: " , req.method);
    next();

}, 
//learned from gfg  
(req,res,next) =>{ 
     const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    console.log(`Url is: ${protocol}://${host}:${port}${url}` );
    next();

},  (req,res,next) =>{ 
    //applied logic learned from mongoose class
    res.on("finish", () => {
        console.log("response status code: " , res.statusCode); 
    });
    next();
})

db.on("open", ()=>{
    console.log("database working");
});


db.on("error", ()=>{
    console.log("connection is not succesfull");
});

productRoutes(app);
cartRoutes(app);
userRoutes(app);

//6vBU4yCFLnLWk2Vl
//santanuchatterjeekonnagar_db_user