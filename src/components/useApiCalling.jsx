import { useEffect, useState } from "react";

function useApiCalling(){

    //for storing using useState hook
    const [allItems , setAllItems] = useState([]);

    //useEffect hook used to handle api fetching
    useEffect(()=>{
       
        async function calling() {
            try{

                //dummy data url 
                 const api = await fetch("https://dummyjson.com/products")

                 //changed into ison format
                const resp= await api.json();

                const data = await resp.products;

                //used setAllItems 
                setAllItems(data);

            }
            //error handelling done
            catch(error){
                console.error(error);
            }
       
        }

        //method called
        calling()

    },[]);

    return allItems;

}

export default useApiCalling;