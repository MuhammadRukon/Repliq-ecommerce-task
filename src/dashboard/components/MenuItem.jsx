import { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  const [active, setActive] = useState(false);
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) => {
        setActive(isActive ? isActive : "");
        return `flex group items-center px-4 py-2 my-5 rounded-xl hover:shadow-md hover:bg-white  hover:text-[#2D3748] transition-colors duration-300 transform  ${
          isActive
            ? "bg-white group text-[#2D3748] shadow-md"
            : "text-[#A0AEC0]"
        }`;
      }}
    >
      <Icon
        className={`${
          active ? "bg-[#48B7E9] text-white" : "bg-white text-[#48B7E9]"
        } w-8 h-8 p-1 transform duration-200 group-hover:text-white group-hover:bg-[#48B7E9] rounded-xl`}
      />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
