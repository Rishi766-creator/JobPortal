import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
function CandidateRoute({children}){
    const {user}=useAuth();
    if(!user||user.role!=="Candidate"){
        return <Navigate to='/' replace />;
    }
    return children;

}
export default CandidateRoute;