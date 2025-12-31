import AboutUs from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
import NoticeSection from "@/components/Home/NoticeSection";
import OurDepartment from "@/components/Home/OurDepartment";
import Study from "@/components/Home/Study";
import useDesignation from "@/hooks/useDesignation";



const Home = () => {

    const [isDesignation] = useDesignation()

    console.log("masum : ", isDesignation)

    return (
        <>
            <Hero />
            <NoticeSection />
            <AboutUs />
            <Study />
            <OurDepartment />
        </>
    );
};

export default Home;
