import NavbarLinks from "../components/NavbarLinks";
import logo from "./../assets/logo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-[#48B7E9] text-white py-4">
        <div className="container cursor-pointer mx-auto px-4 flex gap-3 items-center justify-between lg:px-20">
          {/* logo */}
          <div
            className="flex items-center gap-2"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={logo}
              className="border w-8 rounded-xl bg-white p-1 py-[6px]"
            />
            <p className="font-bold">Repliq </p>
          </div>

          <div className="flex items-center">
            <div className="block lg:hidden border-[1px] rounded-lg p-1">
              <IoMenu size={28} />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="flex gap-2 items-center font-semibold">
                {/* Navbar menus*/}
                <NavbarLinks />
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <hr className="w-2/3 mx-auto" />
      <footer className="text-center font-extralight text-sm text-gray-500 py-4">
        Ecommerce | powered by Repliq.
      </footer>
    </>
  );
};

export default MainLayout;