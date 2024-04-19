import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-6 mx-auto ">
      <div>
        <Link to="/" className=" text-xl font-bold">
          <img
            className="h-10"
            src="https://res.cloudinary.com/codehelp/image/upload/v1667493133/codehelpFinalAssets/ort4cxqmugzj9an4sbae.png"
            alt=""
          />
        </Link>
      </div>
      <nav>
        <div>
          <ul className="flex gap-x-6">
            {isLoggedIn && (
              <li>
                <NavLink
                  to="/home"
                  activeClassName="font-bold text-white"
                  className="text-black hover:text-zinc-400"
                >
                  Home
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/contact"
                activeClassName="font-bold text-white"
                className="text-black hover:text-zinc-400"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                activeClassName="font-bold text-white"
                className="text-black hover:text-zinc-400"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex items-center gap-x-4   ">
        {!isLoggedIn && (
          <Link to="/login">
            <button className=" bg-gray-700 text-white font-bold py-[8px] px-[12px]  rounded-[8px] broder border-r-stone-500 ">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className=" bg-gray-700 text-white font-bold py-[8px] px-[12px]  rounded-[8px] broder border-r-stone-500 ">
              Signup
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged out!");
                navigate("/");
              }}
              className=" bg-gray-700 text-white font-bold py-[8px] px-[12px]  rounded-[8px] broder border-r-stone-500 "
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <NavLink to="/cart" className="hover:text-gray-300 ">
            <div className=" relative">
              <ShoppingCartIcon />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-500 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}{" "}
                </span>
              )}
            </div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
