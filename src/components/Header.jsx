import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosHome } from "react-icons/io";
import { IoMdContact, IoMdCart } from "react-icons/io";

function Header() {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="bg-red-500 text-l font-bold text-white h-8 text-center">
        <h1>Welcome to Shopee Globe</h1>
      </div>

      <header className="bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo & Title */}
          <div className="flex items-center gap-2">
            <img
              src="https://www.atlanticcouncil.org/wp-content/uploads/2025/01/scenarios-growing-global-network-data-connections-concept-1-scaled.jpg"
              alt="ShoppyGlobe"
              className="w-12 h-12 object-cover rounded-full border border-gray-200"
            />
            <h1 className="text-2xl font-bold text-white">ShoppyGlobe</h1>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex gap-6 text-lg font-medium text-white">
              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <IoIosHome />
                <Link to="/">Home</Link>
              </li>

              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <IoMdContact />
                <Link to="/contact">Contact Us</Link>
              </li>

              <li className="flex items-center gap-2 hover:text-blue-600 transition">
                <IoMdCart />
                <Link to="/cart">Orders ({cartItems.length})</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
