import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"; 
import { useCookies } from "react-cookie";

const RequireAuth = ({ allowedRoles }) => {
    const [token,setToken] = useCookies(["mytoken"])
    const { auth } = useAuth();
    const location = useLocation();
    
    return (
        auth?.username || token["mytoken"]
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;