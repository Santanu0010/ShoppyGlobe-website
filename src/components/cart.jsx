import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

function Cart({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row p-4 m-6 bg-white rounded-2xl shadow-lg gap-6 max-w-5xl">
      {/* Product Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-80 h-80 object-contain rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-gray-800">{item.title}</h1>

        <h3 className="text-xl font-semibold text-gray-700">
          ${item.price}  
          <span className="ml-2 text-green-600 text-lg">
            Save {item.discountPercentage}%
          </span>
        </h3>

        <p className="text-gray-700 leading-relaxed">{item.description}</p>

        {/* Quantity Controls */}
        <div className="flex justify-center items-center border-2 border-indigo-600 gap-3">
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="px-3 py-1 text-white rounded hover:bg-red-600"
          >
            ➖
          </button>

          <span className="text-lg font-bold w-15 text-center ">{item.quantity} </span>

          <button
            onClick={() => dispatch(addItem(item))}
            className="px-3 py-1 text-white rounded hover:bg-green-600"
          >
            ➕
          </button>
        </div>
        <button
                onClick={() => alert("Proceeding to checkout 🚀")}
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 font-bold"
              >
                Proceed to Buy
              </button>
      </div>
    </div>
  );
}

export default Cart;
