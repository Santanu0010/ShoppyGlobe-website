import { useEffect, useState } from "react";

function useApiCalling(){

    const [allItems , setAllItems] = useState([]);

    useEffect(()=>{
       
        async function calling() {
            try{
                 const api = await fetch("https://dummyjson.com/products")
                const resp= await api.json();
                const data = await resp.products;

         
                setAllItems(data);

            }
            catch(error){
                console.error(error);
            }
       
        }
        calling()

    },[]);

    return allItems;

}
export default useApiCalling;