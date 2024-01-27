//icons
import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import defaultUser from "./../../assets/defaultUser.png";
import { AuthContext } from "../../provider/AuthProvider";

const DashboardNav = ({ handleToggle }) => {
  const {user, logout} = useContext(AuthContext)

  //handle logout
  const handleLogout = () => {
    logout()
  };

  return (
    <div className="bg-[#48B7E9] rounded-full md:bg-white md:rounded-2xl w-full flex items-center justify-between p-5">
      {/* user details */}
      <div className="flex gap-3 md:gap-[18px]">
        {/* user image */}
        <img
          src={user?.image || defaultUser}
          className="w-12 h-12 rounded-full object-cover overflow-hidden"
        />
        {/* user name and company */}
        <div className="text-white md:text-black">
          <div className="flex items-center gap-2"><p className="text-xs">{user?.company || "no company"}</p> <div className="text-gray-300">|</div>
          <p className="text-xs">{user?.phone || "no number"}</p></div>
          <p className="text-xl">{user?.name || "no user"}</p>
        </div>
      </div>
      {/* top bar action */}
      <div className=" flex gap-3 md:gap-[15px]">
        <button
          onClick={handleToggle}
          className="bg-[#EBF1FF] md:hidden w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] flex justify-center items-center cursor-pointer rounded-full"
        >
          <FaBars />
        </button>
      {user && <div
          onClick={handleLogout}
          className="bg-[#EBF1FF] w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] hidden sm:flex justify-center items-center cursor-pointer rounded-full"
        >
          <FaSignOutAlt size={26} />
        </div>}
      </div>
    </div>
  );
};

export default DashboardNav;
