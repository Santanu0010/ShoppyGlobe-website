import { useEffect, useState } from "react";

function ApiCalling(){

    const [allItems , setAllItems] = useState([]);

    useEffect(()=>{
       
        async function calling() {
            try{
                 const api = await fetch("https://dummyjson.com/products")
                const resp= await api.json();

         
                setAllItems(resp.products || []);

            }
            catch(error){
                console.error(error);
            }
       
        }
        calling()

    },[]);

    return allItems;

}
export default ApiCalling;