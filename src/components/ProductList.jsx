import ApiCalling from "./ApiCalling";

import ProductItem from "./ProductItem";

function ProductList(){


    const productArr = ApiCalling();


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