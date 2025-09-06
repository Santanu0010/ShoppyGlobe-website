import { login, register } from "../Controller/User.controller.js";

export function userRoutes(app){

    
    app.post('/api/login' , login );
    app.post('/api/register',register);
}
