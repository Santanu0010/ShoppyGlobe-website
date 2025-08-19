import { Link } from "react-router-dom";

function ProductItem({ data }) {

    
    return (
        <div className="p-4 border rounded-md shadow hover:shadow-lg transition">
            <img
                src={data.images[0]} 
                alt={data.title}
                className="w-full h-48 object-cover rounded-md"
            />
            <h1 className="mt-2 text-lg font-semibold text-center ">{data.title}</h1>
            <h3 className="text-center">{data.price}  <span className="text-blue-500"> Save {data.discountPercentage}%</span></h3>
            <Link to ={`/product-details/${data.id}`}><button className ="bg-blue-400 rounded-3xl p-3 w-full mt-4" >view more</button></Link>
            

        </div>
    );
}
export default ProductItem;
