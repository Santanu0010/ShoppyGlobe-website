import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"


function ProductDetails() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);


  const dispatch = useDispatch();

  function handleCart(productInfo){
    dispatch(addItem(productInfo))
  }
  

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProductInfo(data);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    }
    fetchProduct();
  }, [id]);

  if (!productInfo) return <p>Loading...</p>;

  
        return (
        <>
            <div className="flex flex-col md:flex-row p-4 m-6 bg-white rounded-2xl shadow-lg gap-6 max-w-5xl ">

            {/* Product Image */}
            <div className="flex-1 flex justify-center items-center">
                <img 
                src={productInfo.images[0]} 
                alt={productInfo.title} 
                className="w-80 h-80 object-contain rounded-lg shadow-md"
                />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-gray-800">{productInfo.title}</h1>
                
                <h3 className="text-xl font-semibold text-gray-700">
                ${productInfo.price}  
                <span className="ml-2 text-green-600 text-lg">
                    Save {productInfo.discountPercentage}%
                </span>
                </h3>

                <div className="flex flex-col gap-1 text-gray-600">
                <span><b>Status:</b> {productInfo.availabilityStatus}</span>
                <span><b>Shipping:</b> {productInfo.shippingInformation}</span>
                <span><b>Warranty:</b> {productInfo.warrantyInformation}</span>
                </div>

                <p className="text-gray-700 leading-relaxed">{productInfo.description}</p>

                {/** add to cart button creation */}
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition" onClick = { ()=> handleCart(productInfo)}>
                Add to Cart
                </button>
            </div>
            </div>
        </>
        );

}

export default ProductDetails;

