import useApiCalling from "./useApiCalling";
import ProductItem from "./ProductItem";
import { useState } from "react";

function ProductList(){

    //called useApiCalling to get data from the api 
    const productArr = useApiCalling();

    //for searched text created a useState  
    const[searchText,setSearchText] = useState("");
    
    //function for filtering 
    const filterProduct = productArr.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()))


    return(

        <>

            {/**search bar created */}
            <div className="flex justify-center items-center m-4 w-full">
                <input 
                    type="text" 
                    placeholder="🔍 Search for a product..." 
                    className="w-3/4 md:w-1/2 px-5 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-700 placeholder-gray-400"
                    onChange ={(e) => setSearchText(e.target.value)}/>
                    
            </div>


            {/*called productItem component */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">

                {/*now its filterProduct cause we want desired output */}
                {filterProduct.map((product) => (
                    <ProductItem key={product.id} data={product} />
                ))}
            </div>

    </>

    );
    

   
       

  

}
export default ProductList;