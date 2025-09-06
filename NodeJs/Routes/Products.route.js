import {fetchProducts, addProduct, fetchParticularProduct } from "../Controller/Products.controller.js";


export function productRoutes(app){

    app.get('/api/products' ,fetchProducts);
    app.get('/api/product/:id' ,fetchParticularProduct);

    app.post('/api/products' , addProduct );
}

