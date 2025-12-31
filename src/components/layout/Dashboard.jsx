import { Home, LogOut, Menu, X } from "lucide-react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import SuperAdminNavItem from "../ui/DashboardNavItem/admin/SuperAdminNavItem";
import StudentNavItem from "../ui/DashboardNavItem/admin/StudentNavItem";
import useAuth from "@/hooks/useAuth";



const Dashboard = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate()
    const { logout, role:designation } = useAuth()



    const handleLogout = () => {
        logout()
        navigate("/", { replace: true });
    };

    const linkClass = ({ isActive }) =>
        `block w-full px-2 py-2 rounded text-sm border mb-2 border-[#006A8E] ${isActive ? "bg-[#006A8E] text-white" : "hover:bg-[#006A8E]/30"
        }`;

    const navClass = (isActive) =>
        `px-3 py-2 rounded flex justify-between items-center ${isActive
            ? "text-white bg-[#00455D]"
            : "text-[#00202E] hover:bg-[#e0f0f7]"
        }`;


    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            {/* Mobile Sidebar Button */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden fixed top-5 left-5 z-50 bg-white p-2 rounded shadow border"
            >
                <Menu />
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 border-r pl-3 border-gray-300 bg-white z-40 transform transition-transform duration-300 flex flex-col overflow-hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            >

                {/* Close button for mobile */}
                <button
                    onClick={() => setSidebarOpen(false)}
                    className="lg:hidden absolute top-5 right-5 bg-gray-100 p-2 rounded"
                >
                    <X />
                </button>

                <div className="border border-gray-300 py-4 flex justify-center">
                    <Link to="/">
                        <img src="/logo.svg" alt="Logo" />
                    </Link>
                </div>

                <div className="p-4 pt-8 pl-0 space-y-3 w-full flex-1 overflow-y-auto">

                    {designation === "superAdmin" && (
                        <SuperAdminNavItem openMenu={openMenu} setOpenMenu={setOpenMenu} linkClass={linkClass} navClass={navClass} />
                    )}

                    {designation === "student" && (
                        <StudentNavItem openMenu={openMenu} setOpenMenu={setOpenMenu} linkClass={linkClass} navClass={navClass} />
                    )}

                </div>

                <NavLink to="/" className="flex cursor-pointer items-center gap-3 py-4 border-t px-3 border-gray-300">
                    <Home />
                    <span>Go To Home</span>
                </NavLink>
                <button onClick={handleLogout} className="flex cursor-pointer items-center gap-3 py-4 px-3 border-gray-300">
                    <LogOut className="text-red-500" />
                    <span>Log Out</span>
                </button>


            </aside>

            {/* Main Content */}
            <main
                className="flex-1 h-full overflow-y-auto 
                ml-0 lg:ml-64 transition-all duration-300"
            >
                <div
                    className="pb-6 pl-6 pt-6 border-b border-gray-300 text-2xl font-bold bg-white sticky top-0 text-center pl-16 lg:pl-6"
                >
                    {designation === "superAdmin" && <p>Super Admin</p>}
                    {designation === "student" && <p>Student</p>}
                </div>

                <div className="p-6">
                    <Outlet />
                </div>
            </main>

            {/* Overlay when sidebar open (mobile) */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black/30 lg:hidden z-30"
                ></div>
            )}
        </div>
    );
};

export default Dashboard;
