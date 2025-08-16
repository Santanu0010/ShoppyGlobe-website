import useApiCalling from "./useApiCalling";
import ProductItem from "./ProductItem";

function ProductList(){


    const productArr = useApiCalling();
    


    return(

        <>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
                {productArr.map((product) => (
                    <ProductItem key={product.id} data={product} />
                ))}
            </div>

    </>

    );
    

   
       

  

}
export default ProductList;