import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import ProductSummary from "../pages/Summaries/ProductSummaryView";
import { FiShoppingCart } from "react-icons/fi";
// import AddToCartStr from "../utils/AddToCartStr";
import Logo from "../assets/valentin-day.png";

function Navbar() {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const [useIsDrawerOpen, setIsDrawerOpen] = useState(false);
  if (!userContext || !cartContext) {
    console.error("UserContext is null");
    return null;
  }
  const { useName } = userContext;
  const { useCart } = cartContext;

  const toggleDrawer = () => {
    // console.log("Toggling drawer", useIsDrawerOpen);
    setIsDrawerOpen(!useIsDrawerOpen);
  };

  return (
    <nav className="bg-white p-4 hidden flex-row md:flex justify-around items-center shadow-md sticky top-0 z-10">
      <div>
        <img src={Logo} alt="" className="w-13" />
      </div>
      <div className="flex gap-5">
        <Link to="/" className="text-md  text-gray-800 hover:text-gray-600">
          Home
        </Link>
        <Link
          to="/About"
          className="text-md  text-gray-800 hover:text-gray-600"
        >
          About
        </Link>
      </div>
      {/* Cart Icon */}
      <div className="flex gap-5 items-center">
        <div className="text-center">
          <button
            className="relative text-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3 mb-2 focus:outline-none "
            type="button"
            aria-label={`Show cart drawer (${useCart?.length || 0} items)`}
            onClick={toggleDrawer}
          >
            <FiShoppingCart size={24} />
            {useCart?.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {useCart.length}
              </span>
            )}
          </button>
        </div>
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="../assets/react.svg"
          alt="Bordered avatar"
        />
        <p>User login : {useName ? useName : "ไม่เจอ"}</p>
      </div>
      {useIsDrawerOpen && <ProductSummary onClose={toggleDrawer} />}
    </nav>
  );
}

export default Navbar;
