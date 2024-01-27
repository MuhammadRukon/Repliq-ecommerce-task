import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavbarLinks = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <NavLink
        to="/"
        className="py-2 px-3 rounded-lg hover:bg-white hover:text-[#262C6C] transform duration-300"
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className="py-2 px-3 rounded-lg hover:bg-white hover:text-[#262C6C] transform duration-300"
      >
        Dashboard
      </NavLink>
      {/* show items below if user exists */}
      {user && (
        <>
          <NavLink
            to="/products"
            className="py-2 px-3 rounded-lg text-white hover:bg-white hover:text-[#262C6C] transform duration-300"
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className="py-2 px-3 rounded-lg text-white hover:bg-white hover:text-[#262C6C] transform duration-300"
          >
            Cart
          </NavLink>
          <button
            onClick={logout}
            className="py-2 px-3 rounded-lg text-white hover:bg-white hover:text-[#262C6C] transform duration-300"
          >
            Logout
          </button>
        </>
      )}
      {/* show items below if user doesn't exist */}
      {!user && (
        <>
          <NavLink
            to="/login"
            className="py-2 px-3 rounded-lg text-white hover:bg-white hover:text-[#262C6C] transform duration-300"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="py-2 px-3 rounded-lg text-white hover:bg-white hover:text-[#262C6C] transform duration-300"
          >
            Register
          </NavLink>
        </>
      )}
    </>
  );
};

export default NavbarLinks;
