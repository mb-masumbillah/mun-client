import { Navigate, useLocation } from "react-router-dom";


const ProctedRoute = ({ children }) => {

    const location = useLocation();


    return (
        <Navigate state={location.pathname} to="/">
            {children}
        </Navigate>
    );
};

export default ProctedRoute;