import { createBrowserRouter } from "react-router-dom";
import { MainLayoutRoutes } from "./MainLayoutRoutes";
import { DashboardRoutes } from "./DashboardRoutes";
import StudentRegister from "@/pages/Public/Student/StudentRegister";
import Login from "@/pages/Public/auth/Login";

const router = createBrowserRouter([
    ...MainLayoutRoutes,
    ...DashboardRoutes,


    // Authentication
    {
        path: "/student-register",
        element: <StudentRegister />
    },
    {
        path: "/login",
        element: <Login />
    },


    // {
    //     path: "/payment",
    //     element: <PaymentForm />
    // },
    

])

export default router
