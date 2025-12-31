import { createBrowserRouter } from "react-router-dom";
import { MainLayoutRoutes } from "./MainLayoutRoutes";
import { DashboardRoutes } from "./DashboardRoutes";
import App from "@/app";
import StudentRegister from "@/pages/Public/Student/StudentRegister";
import Login from "@/pages/Public/auth/Login";
import PaymentForm from "@/pages/Dashboard/Student/children/PaymentForm";

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



    {
        path: "/app",
        element: <App />
    },
    {
        path: "/payment",
        element: <PaymentForm />
    },
    

])

export default router
