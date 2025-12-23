import { useState } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import InputField from "../components/auth/InputField";
import {Link} from 'react-router-dom';
function Register(){
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        if(!name){
            return setError("Name is required");
        };
        if(!email){
            return setError("Email is required");
        };
        if(!password){
            return setError("Password is required");
        }
        alert("Registered successfully");

        

    }
    return(
    <AuthLayout title="Create Accout" subtitle="Join JobPortal and find your dream job" error={error}>
        <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField 
                label="name"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="ex : Rishi"
            />
            <InputField 
                label="Email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="you@exmaple.com"
            />
            <InputField 
                label="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="*****"
            />
            <AuthButton>Register</AuthButton>
            <p className="text-sm text-center text-gra-600 mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 font-medium">Login</Link>
            </p>

        </form>


    </AuthLayout>
    )

}
export default Register;