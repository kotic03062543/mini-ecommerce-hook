import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import ProductSummary from "../pages/Summaries/ProductSummaryView";
import { FiShoppingCart } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/valentin-day.png";

function Navbar() {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const [useIsDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!userContext || !cartContext) {
    console.error("UserContext is null");
    return null;
  }

  const { useName } = userContext;
  const { useCart } = cartContext;

  const toggleDrawer = () => {
    setIsDrawerOpen(!useIsDrawerOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-10">
      <div className="flex justify-between items-center">
        {/* Logo + Hambur */}
        <div className="flex items-center gap-4">
          <Link to={"/"} className="flex items-center gap-2">
            {" "}
            <img src={Logo} alt="Logo" className="w-12 h-12" />
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* CENTER MENU md+๙ **/}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-md text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link
            to="/About"
            className="text-md text-gray-800 hover:text-gray-600"
          >
            About
          </Link>
          <Link
            to="/LifeNavigate"
            className="text-md text-gray-800 hover:text-gray-600"
          >
            Life Navigate
          </Link>
        </div>

        {/* Cart + Avatar + Username */}
        <div className="flex gap-4 items-center">
          <button
            className="relative text-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3 focus:outline-none"
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

          <img
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300"
            src="../assets/react.svg"
            alt="avatar"
          />
          <p className="hidden sm:block text-sm">User: {useName || "ไม่เจอ"}</p>
        </div>
      </div>

      {/* DROPDOWN Menu for mobile */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link to="/" className="text-md text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link
            to="/About"
            className="text-md text-gray-800 hover:text-gray-600"
          >
            About
          </Link>
          <Link
            to="/LifeNavigate"
            className="text-md text-gray-800 hover:text-gray-600"
          >
            Life Navigate
          </Link>
        </div>
      )}

      {/* Drawer */}
      {useIsDrawerOpen && <ProductSummary onClose={toggleDrawer} />}
    </nav>
  );
}

export default Navbar;
