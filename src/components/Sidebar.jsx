// src/components/Sidebar.jsx

import "@fontsource/audiowide";
import "@fontsource/orbitron/700.css"; // specific weight
import "@fontsource/rajdhani/500.css";
import "@fontsource/press-start-2p";
import {
  LayoutDashboard,
  BadgePlus,
  Pizza,
  Users,
  Settings,
  LogOut,
  ListOrdered,
  Trash2,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../util/auth";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <aside
        className={`row-span-4 row-start-2 fixed top-0 left-0 h-full w-64 z-50
        bg-white dark:bg-[#0f0f1e] 
        border-r border-gray-200 dark:border-gray-800 
        p-6 flex flex-col gap-4
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:h-auto`}
      >
        <h2 className="text-lg font-bold text-[#ff4d00] font-[Orbitron] mb-2">
          Menu
        </h2>

        <nav className="flex flex-col gap-1">
          <SidebarItem
            onClick={() => setIsSidebarOpen(false)}
            to="/dashboard"
            icon={LayoutDashboard}
            label="Dashboard"
          />

          <SidebarItem
            onClick={() => setIsSidebarOpen(false)}
            to="/products"
            icon={Pizza}
            label="Products"
          />
          <SidebarItem
            onClick={() => setIsSidebarOpen(false)}
            to="/add-product"
            icon={BadgePlus}
            label="Add Product"
          />
          <SidebarItem to="/orders" icon={ListOrdered} label="Orders" />

          {currentUser?.role === "admin" && (
            <>
              <SidebarItem
                onClick={() => setIsSidebarOpen(false)}
                to="/users"
                icon={Users}
                label="Users"
              />
              <SidebarItem
                onClick={() => setIsSidebarOpen(false)}
                to="/settings"
                icon={Settings}
                label="Settings"
              />
              <SidebarItem
                onClick={() => setIsSidebarOpen(false)}
                to="/trash"
                icon={Trash2}
                label="Restore item"
              />
            </>
          )}
        </nav>

        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
