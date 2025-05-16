import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white p-4 flex justify-around items-center shadow-md sticky top-0 z-10">
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
      <img
        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
        src="../assets/react.svg"
        alt="Bordered avatar"
      />
    </nav>
  );
}

export default Navbar;
