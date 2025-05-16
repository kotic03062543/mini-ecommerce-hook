import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Navbar() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    console.error("UserContext is null");
    return null;
  }

  const { useName } = userContext;
  console.log(useName);
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
      <div className="flex gap-5 items-center">
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
