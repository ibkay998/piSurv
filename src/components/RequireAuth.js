import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"; 
import { useCookies } from "react-cookie";

const RequireAuth = ({ allowedRoles }) => {
    const [token,setToken] = useCookies(["mytoken"])
    const { auth } = useAuth();
    const location = useLocation();
    console.log(allowedRoles)
    
    return (
        
        auth?.isStaff === allowedRoles || (auth?.token & auth?.isStaff === allowedRoles)
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;