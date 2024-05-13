import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ReactBtnName, SetReactBtnName] = useState("Login");
  const { LoggedInUser } = useContext(UserContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const CartItems = useSelector((store) => store.cart.Items);
  console.log(CartItems);
  return (
    <div>
      <nav className="bg-cyan-800 p-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center h-15 w-24">
            <Link to={"/"}>
              <img src="https://crisfood.com/img/logo.svg"></img>
            </Link>
          </div>

          <div className="hidden md:flex">
            <Link className="text-white ml-4" to={"/"}>
              Home
            </Link>
            <Link className="text-white ml-4" to={"/about"}>
              About
            </Link>
            <Link className="text-white ml-4" to={"/contact"}>
              Contact
            </Link>
            <button
              className="text-white ml-4"
              onClick={() => {
                ReactBtnName === "Login"
                  ? SetReactBtnName("Logout")
                  : SetReactBtnName("Login");
              }}
            >
              {ReactBtnName}
            </button>
            <li className="font-semibold text-white ml-4 list-none">
              {LoggedInUser}
            </li>
            <li className="list-none  text-white ml-4">
              <Link to={"/cart"}>
                <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
                <span className="">{CartItems.length}</span>
              </Link>
            </li>
          </div>
          <div className="md:hidden">
            {/* Mobile Menu Button */}
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <Link className="block text-white mt-4" to={"/"}>
            Home
          </Link>
          <Link className="block text-white mt-4" to={"/about"}>
            About
          </Link>
          <Link className="block text-white mt-4" to={"/contact"}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
