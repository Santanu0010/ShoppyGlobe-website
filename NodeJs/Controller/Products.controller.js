//logics of api 
/*GET /products: Fetch a list of products from MongoDB.
○ GET /products/
: Fetch details of a single product by its ID.
○ POST /cart: Add a product to the shopping cart.
○ PUT /cart/
: Update the quantity of a product in the cart.
○ DELETE /cart/
: Remove a product from the cart.
*/

import ProductModel from "../Model/Products.model.js";

export async function fetchProducts(req,res){
    try{
        const data = await ProductModel.find()  //returns a promise
            if(!data){
                return res.status(404).json({message: "Products are not found"});
            }
            res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({message: "api not working properly"});
    }
}



export async function fetchParticularProduct(req,res){
    try{
        
         const productId = req.params.id; 

         const data = await ProductModel.findById(productId)  //returns a promise


                if(!data){  
                    return res.status(404).json({message: "Searched Product not found, check id please"});
                }

                res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({message: "api not working properly"});
    }
}

export async function addProduct(req,res){
    try{
         
        let newProduct= await ProductModel.create(req.body) ;
        res.status(201).json(newProduct); //returns a promise

    }
    catch(err){
        res.status(500).json({message: "api not working properly"});
    } 
}