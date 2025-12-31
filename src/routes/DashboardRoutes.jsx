import Dashboard from "@/components/layout/Dashboard";
import Profile from "@/components/ui/Profile/Profile";
import AllPayment from "@/pages/Dashboard/Admin/Children/AllPayment";
import AllStudent from "@/pages/Dashboard/Admin/Children/AllStudent";
import PaymentApproval from "@/pages/Dashboard/Admin/Children/PaymentApproval";
import StudentApproval from "@/pages/Dashboard/Admin/Children/StudentApproval";
import SuperAdmin from "@/pages/Dashboard/Admin/SuperAdmin";
import PaymentForm from "@/pages/Dashboard/Student/children/PaymentForm";
import Student from "@/pages/Dashboard/Student/Student";



export const DashboardRoutes = [
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <Profile></Profile>,
            },

            // super admin
            {
                path:"super-admin",
                element: <SuperAdmin/>,
                children: [
                    {
                        path: "all-student",
                        element: <AllStudent/>
                    },
                    {
                        path: "student-approval",
                        element: <StudentApproval/>
                    },
                    {
                        path: "all-payment",
                        element: <AllPayment/>
                    },
                    {
                        path: "payment-approval",
                        element: <PaymentApproval/>
                    },

                ]
            },
            
            // student
            {
                path: "student",
                element: <Student/>,
                children: [
                    {
                        path: "payment",
                        element: <PaymentForm/>
                    }
                ]
            }
        ]
    },

]
