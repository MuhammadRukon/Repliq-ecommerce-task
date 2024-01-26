import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/components/Sidebar";
import DashboardNav from "../dashboard/components/DashboardNav";
import { useState } from "react";

const DashboardLayout = () => {
  const [isActive, setActive] = useState(true);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive((val) => !val);
  };

  return (
    <div className="relative min-h-screen bg-[#def5ff] py-[25px] md:flex">
      {/* Sidebar Component */}
      <Sidebar isActive={isActive} handleToggle={handleToggle} />
      <div className="flex-1 mx-[25px] space-y-5">
        <DashboardNav handleToggle={handleToggle} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
