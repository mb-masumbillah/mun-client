import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const SuperAdminNavItem = ({ openMenu, setOpenMenu, linkClass, navClass }) => {
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div>
      <NavLink to="/dashboard" end className={({ isActive }) => navClass(isActive)}>
        <span>Dashboard</span> <ChevronRight />
      </NavLink>

      {/* Institute Management */}
      <div>
        <button
          onClick={() => toggleMenu("allStudent")}
          className={`w-full px-3 py-2 flex justify-between items-center rounded-tl rounded-tr mt-2 ${openMenu === "allStudent"
            ? "bg-[#00455D] text-white"
            : "hover:bg-[#e0f0f7]"
            }`}
        >
          <span>All Student</span>
          <ChevronDown className="transition-transform rotate-0" />
        </button>

        {openMenu === "allStudent" && (
          <div className="bg-[#00455D] text-white rounded-b px-5 py-2">
            <NavLink to="/dashboard/super-admin/all-student" className={linkClass}>
              All Student
            </NavLink>
            <NavLink to="/dashboard/super-admin/student-approval" className={linkClass}>
              Student Approval
            </NavLink>
            <NavLink to="/dashboard/super-admin/all-payment" className={linkClass}>
             All Payment
            </NavLink>
            <NavLink to="/dashboard/super-admin/payment-approval" className={linkClass}>
              Payment Approval
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminNavItem;
