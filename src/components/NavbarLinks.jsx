import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLinks = () => {
  let user = false;
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
