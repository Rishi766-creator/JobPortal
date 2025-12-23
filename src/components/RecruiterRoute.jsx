import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
function RecruiterRoute({children}){
    const {user}=useAuth();
    if(!user||user.role!=="Recruiter"){
        return <Navigate to='/' replace />;
    }
    return children;

}
export default RecruiterRoute;