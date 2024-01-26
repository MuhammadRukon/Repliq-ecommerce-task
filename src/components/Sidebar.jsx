import NavbarLinks from "./NavbarLinks";

import React from "react";

const Sidebar = ({ hide }) => {
  return (
    <div
      className={`z-10 min-h-[100vh] h-[100vh] md:h-full overflow-x-scroll absolute top-0 md:hidden flex flex-col md:min-h-full md:min-h-[calc(100vh-50px)] md:rounded-3xl justify-between bg-[#F8F9FA] w-64 space-y-6 px-2 py-4 md:mb-[25px] md:ml-[25px] transform ${
        hide && "-translate-x-full"
      }  md:translate-x-0  transition duration-200 ease-in-out`}
    >
      <div>
        {/* Nav Items */}
        <div className="flex flex-col justify-between px-4 flex-1 mt-6 !text-black">
          <NavbarLinks />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
