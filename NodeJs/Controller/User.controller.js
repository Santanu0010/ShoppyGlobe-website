import UserModel from "../Model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(req,res){
    
     try{
        const {fullName,email,password} = req.body;

        const data = await UserModel.findOne({email}) ;

        if(data){
           return res.status(404).json({message:"email already existed "});
        }

        else{
            const newUser = await UserModel.create({ 
                fullName,
                email,
                password: bcrypt.hashSync(password, 10)});

                return res.status(201).json(newUser);
        }
        
        
    }
    catch(err){
        res.status(500).json({message: "api not working properly"});
    }
}
export async function login(req,res){

     try{

        const {email,password} = req.body;

        const data = await UserModel.findOne({email}) ;

        if(!data){
           return res.status(404).json({message:"email doesnot exist "});
        }
        let validPassword = bcrypt.compareSync(password, data.password); 
        if(!validPassword){
            return res.status(404).json({message:"Invalid password"});
        }
        else{
            const token = jwt.sign({id:data._id},"SecretKeyhainhum",{});
            return res.status(201).json({user:
                {
                    email:data.email,
                    fullName:data.fullName
                },
                accesstoken:token
            })
        }
        
    }
    catch(err){
        res.status(500).json({message: "api not working properly"});
    }


}