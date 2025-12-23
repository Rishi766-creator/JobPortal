import {useState} from 'react';
import {Link} from "react-router-dom";
import AuthLayout from '../components/auth/AuthLayout';
import InputField from '../components/auth/InputField';
import AuthButton from '../components/auth/AuthButton';
import {useAuth} from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [role,setRole]=useState("");
    const {login}=useAuth();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email){
            return setError("Email required");
        }
        if(!password){
            return setError("Password required");
        }
        if(!role){
            return setError("Role is required");
        }

        
        login({email,role});
        navigate('/dashboard');
    }
    return(
    <AuthLayout title="Welcome Back" subtitle="Login to continue to JobPortal" error={error}>
        <form className='space-y-4' onSubmit={handleSubmit}>
            <InputField
                label="Email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="you@example.com"
            />
            <InputField
                label="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="*****"
            />
            <InputField
                label="Role"
                type="radio"
                name="role"
                value={role}
                onChange={(e)=>setRole(e.target.value)}
                options={[
                    {label:"Recruiter",value:"Recruiter"},
                    {label:"Candidate",value:"Candidate"},
                ]}
            />
            <AuthButton>Login</AuthButton>
        </form>
        <p className='text-sm text-center text-gray-600 mt-4'>
            Don't have an accout?{" "}
            <Link to='/register' className='text-blue-600 font-medium'>Register</Link>
        </p>

    </AuthLayout>
    )

}
export default Login;