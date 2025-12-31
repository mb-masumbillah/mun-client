import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";

const AvatarMenu = ({ handleLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Avatar */}
      <div
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer border border-gray-300"
      >
        <img
          src="avater.jpg"
          alt="avatar"
          className="w-full h-full rounded-full"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute -right-20 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-100 p-2 z-50">
          <NavLink
            to="/dashboard"
            onClick={() => setOpen(false)}
            className="w-full block px-5 py-2 border-b border-t mb-1 border-gray-800  text-black text-center hover:bg-gray-50 rounded-xl"
          >
            Dashboard
          </NavLink>

          <button
            onClick={() => {
              handleLogout();
              setOpen(false);
            }}
            className="w-full block px-5 py-2 text-red-600 text-center border-t border-b border-gray-800 hover:bg-red-50 rounded-xl"
          >
            <LogOut className="inline mr-2" /> Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
