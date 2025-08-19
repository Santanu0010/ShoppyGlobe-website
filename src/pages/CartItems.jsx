import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/cart";
import { clearCart } from "../utils/cartSlice";

function CartItems() {

    const items = useSelector((state)=>state.cart.items);

    const dispatch = useDispatch();
    


    return(
        <>

              <h2 className="text-2xl font-bold mb-5">Your Cart</h2>

              {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty 🛒</p>
      ) : (
         <>
          <div className="space-y-4 flex flex-col items-center justify-center">
            {items.map((item, index) => (
              <Cart key={index} item={item} />
            ))}
          </div>

          <button
            onClick={() => dispatch(clearCart(items))}
            className="mt-5 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Clear Cart
          </button>
          </>
        
      )}

        
        </>
    );


}
export default CartItems; 