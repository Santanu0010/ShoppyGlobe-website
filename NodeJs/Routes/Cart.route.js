import { addtoCart, ChangeCart, deleteItem, fetchCart } from "../Controller/Cart.controller.js";
import { AuthenticateUser } from "../Middleware/AuthenticateUser.js";

export function cartRoutes(app){

    app.get('/api/cart/:userId',AuthenticateUser,fetchCart);
    app.post('/api/cart' ,AuthenticateUser, addtoCart );
    app.delete('/api/cart/:id',AuthenticateUser,deleteItem);
    app.put('/api/cart/:id',AuthenticateUser,ChangeCart);
}

