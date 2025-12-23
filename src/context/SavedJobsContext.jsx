import {useContext,useState,createContext,useEffect} from 'react';
import { useAuth } from './AuthContext';
const SavedJobsContext=createContext();
export function SavedJobsProvider({children}){
    const {user}=useAuth();
    const [savedJobs,setSavedJobs]=useState(()=>{
        const storedJobs=localStorage.getItem(`savedJobs_${user.email}`);
        return storedJobs?JSON.parse(storedJobs):[]    });
    const toggleJob=(job)=>{
        setSavedJobs(prev=>{
            const exist=prev.some(j=>j.id===job.id);
            return exist?prev.filter(j=>j.id!==job.id):[...prev,job];
        })
    };
    
useEffect(() => {
  if (user) {
    localStorage.setItem(`savedJobs_${user?.email}`, JSON.stringify(savedJobs));
  }
}, [savedJobs, user]);
    useEffect(() => {
  if (!user) {
    setSavedJobs([]);
    return;
  }
  const storedJobs = localStorage.getItem(`savedJobs_${user?.email}`);
  setSavedJobs(storedJobs ? JSON.parse(storedJobs) : []);
}, [user]);

    return(
        <SavedJobsContext.Provider
            value={{savedJobs,toggleJob}}
        >{children}</SavedJobsContext.Provider>

    );
}
export function useSavedJobs(){
    return useContext(SavedJobsContext);
}