import jwt from "jsonwebtoken";


export function AuthenticateUser(req,res,next){

    const authHeader = req.headers['authorization'];
    const token  =authHeader && authHeader.split(" ")[1];

    jwt.verify(token,"SecretKeyhainhum",(err,user)=>{
        if(err){
            return res.status(404).json({message:"password mismatch"});
        }
        req.user=user;
        next();
    })


}

export function  AuthenticateProduct(req,res,next){

    const {productId,quantity} =req.body;

    if(!productId){
       return  res.status(404).json({message :"productId not entered"})
    }
    console.log("product id checked ",productId);
    next();
} 