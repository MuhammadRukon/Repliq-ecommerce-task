import MenuItem from "./MenuItem";
import logoWithText from "../../assets/logo.png";
// icons
import { MdOutlineCancel } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";

const Sidebar = ({ isActive, handleToggle }) => {
  const handleLogout = () => {
    console.log("logged out button clicked");
  };
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`z-10 min-h-[100vh] h-[100vh] md:h-full overflow-x-scroll absolute top-0 md:static flex flex-col lg:min-h-full md:min-h-[calc(100vh-50px)] md:rounded-3xl justify-between bg-[#F8F9FA] w-64 space-y-6 px-2 py-4 md:mb-[25px] md:ml-[25px] transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="relative">
            <div className="w-full md:flex bg-transparent px-4 py-2 justify-center items-center mx-auto">
              <img src={logoWithText} alt="Logo" />
            </div>
            <div
              className="text-red-600 absolute top-1 md:hidden right-1"
              onClick={handleToggle}
            >
              <MdOutlineCancel size={24} />
            </div>
          </div>
          {/* Nav Items */}
          <div className="flex flex-col  justify-between px-4 flex-1 mt-6">
            <nav>
              {/* Menu Items */}
              <MenuItem icon={AiFillHome} label="Home" address="/dashboard" />
              <MenuItem
                icon={FaUsersCog}
                label="User management"
                address="/dashboard/user-management"
              />
            </nav>
          </div>
        </div>

        <div className="px-5">
          <hr />
          <button className="flex w-full items-center px-4 py-2 mt-5 rounded-xl hover:shadow-md hover:text-[#2D3748] text-[#A0AEC0] transition-colors duration-300 transform">
            <FaSignOutAlt size={22} />

            <span onClick={handleLogout} className="mx-3 font-medium">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
