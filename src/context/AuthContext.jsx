import {useContext,createContext,useState} from 'react';
const AuthContext=createContext();
export function AuthProvider({children}){
    const [user,setUser]=useState(()=>{
        const storedUser=localStorage.getItem("user");
        return storedUser?JSON.parse(storedUser):null;
    });
   
    const login=({email,role})=>{
        const userData={email,role};
        setUser(userData);
        localStorage.setItem("user",JSON.stringify(userData));
    };
    const logout=()=>{
        setUser(null);
        localStorage.removeItem("user");
    };
    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )


}
export function useAuth(){
    return useContext(AuthContext);
}