import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import AddToCartStr from "../utils/AddToCartStr";

function Navbar() {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  if (!userContext || !cartContext) {
    console.error("UserContext is null");
    return null;
  }
  const { useName } = userContext;
  const { useCart } = cartContext;

  const { cartItems } = AddToCartStr();
  console.log(cartItems);

  return (
    <nav className="bg-white p-4 hidden flex-row md:flex justify-around items-center shadow-md sticky top-0 z-10">
      <div>LOGO</div>
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
        <Link to="/" className="relative">
          CART
          {useCart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {useCart.length}
            </span>
          )}
        </Link>
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src="../assets/react.svg"
          alt="Bordered avatar"
        />
        <p>User login : {useName ? useName : "ไม่เจอ"}</p>
      </div>
    </nav>
  );
}

export default Navbar;
