import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const StudentNavItem = () => {
  const navClass = (isActive) =>
    `px-3 py-2 rounded flex justify-between items-center mt-5 ${isActive
      ? "text-white bg-[#00455D]"
      : "text-[#00202E] hover:bg-[#e0f0f7]"
    }`;
  return (
    <div>
      <NavLink to="/dashboard" end className={({ isActive }) => navClass(isActive)}>
        <span>Dashboard</span> <ChevronRight />
      </NavLink>
      <NavLink to="/dashboard/student/payment" end className={({ isActive }) => navClass(isActive)}>
        <span>Semester wise payement</span> <ChevronRight />
      </NavLink>
    </div>
  );
};

export default StudentNavItem;