// src/components/SidebarItem.jsx
import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, icon: Icon, label, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? "bg-[#ff4d00]/10 text-[#ff4d00] font-semibold"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`
      }
    >
      <Icon size={18} />
      {label}
    </NavLink>
  );
};

export default SidebarItem;
