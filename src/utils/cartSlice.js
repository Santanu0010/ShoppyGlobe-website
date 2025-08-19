import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items: [],
    },
    reducers:{
        addItem: (state, action ) =>{
            const item = action.payload

            const exist = state.items.find(p => p.id === item.id);
            if(exist){
                exist.quantity+=1
            }
            else{
                state.items.push({ ...item, quantity: 1 }); 
            }


        },
        removeItem: (state, action) => {
            const itemId = action.payload; // payload = product id

            const exist = state.items.find(p => p.id === itemId);

            if (exist) {
                if (exist.quantity > 1) {
                exist.quantity -= 1; // just decrease quantity
                } else {
                state.items = state.items.filter(p => p.id !== itemId); 
               }
            }
        },
        clearCart: (state,action) =>{
            state.items.length = 0;
        }
    }
});

 export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer