import MenuItem from "./MenuItem";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
// icons
import { MdOutlineCancel } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Sidebar = ({ isActive, handleToggle }) => {
  const { user, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logged out button clicked");
  };
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`z-10 min-h-[100vh] h-[100vh] md:h-full overflow-x-auto absolute top-0 md:static flex flex-col lg:min-h-full md:min-h-[calc(100vh-50px)] md:rounded-3xl justify-between bg-[#F8F9FA] w-64 space-y-6 px-2 py-4 md:mb-[25px] md:ml-[25px] transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* logo */}
          <div
            onClick={() => navigate("/")}
            className="w-full md:flex cursor-pointer bg-transparent px-4 py-2 justify-center items-center mx-auto"
          >
            <img src={logo} alt="Logo" className="w-12" />
          </div>
          <div
            className="text-red-600 absolute top-1 md:hidden right-1"
            onClick={handleToggle}
          >
            <MdOutlineCancel size={24} />
          </div>
          {/*side Nav Items */}
          <div className="flex flex-col  justify-between px-4 flex-1 mt-6">
            <nav>
              {/* Menu Items */}
              <MenuItem icon={AiFillHome} label="Home" address="/dashboard" />
              <MenuItem
                icon={FaUsersCog}
                label="Customer list"
                address="/dashboard/customer-management"
              />
              <MenuItem
                icon={BsBoxFill}
                label="Product list"
                address="/dashboard/products"
              />
              <MenuItem
                icon={FaCartArrowDown}
                label="Order list"
                address="/dashboard/order-management"
              />
            </nav>
          </div>
        </div>

        <div className="px-5">
          <hr />
          {user ? (
            <button className="flex w-full items-center px-4 group py-2 mt-5 rounded-xl hover:shadow-md hover:bg-white text-[#A0AEC0] transition-colors duration-300 transform">
              <FaSignOutAlt size={22} className="group-hover:text-[#48B7E9]" />

              <span
                onClick={logout}
                className="mx-3 font-medium transform duration-200 group-hover:text-[#2D3748] text-[#A0AEC0] p-1"
              >
                Logout
              </span>
            </button>
          ) : (
            <button className="flex w-full items-center px-4 group py-2 mt-5 rounded-xl hover:shadow-md hover:bg-white text-[#A0AEC0] transition-colors duration-300 transform">
              <FaSignOutAlt size={22} className="group-hover:text-[#48B7E9]" />

              <span
                onClick={() => navigate("/login")}
                className="mx-3 font-medium transform duration-200 group-hover:text-[#2D3748] text-[#A0AEC0] p-1"
              >
                Login
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
