import MainLayout from "@/components/layout/MainLayout";
import AboutUsPage from "@/pages/Public/Home/AboutUsPage";
import AcademicPage from "@/pages/Public/Home/AcademicPage";
import AllNotice from "@/pages/Public/Home/AllNotice";
import ContactUsPage from "@/pages/Public/Home/ContactUsPage";
import Home from "@/pages/Public/Home/Home";
import Instructors from "@/pages/Public/Home/Instructors";



export const MainLayoutRoutes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'notice',
                element: <AllNotice />,
            },
            {
                path: 'about',
                element: <AboutUsPage />,
            },
            {
                path: 'contact',
                element: <ContactUsPage />,
            },
            {
                path: 'academic',
                element: <AcademicPage />,
            },
            {
                path: 'instructors',
                element: <Instructors />,
            },
        ],
    }
]