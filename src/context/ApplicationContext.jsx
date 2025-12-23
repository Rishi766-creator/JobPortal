import {createContext,useContext,useState,useEffect} from 'react';
import {useAuth} from "./AuthContext";

const ApplicationContext=createContext();
export function ApplicationProvider({children}){
    const {user}=useAuth();
    const [applications,setApplications]=useState(()=>{
        const stored=localStorage.getItem("applications");
        return stored?JSON.parse(stored):{};
    });
    useEffect(()=>{
        localStorage.setItem("applications",JSON.stringify(applications));

    },[applications]);
    const applyToJob=({recruiterEmail,jobId,application})=>{
        
        setApplications(prev=>{
            const recruiterApps=prev[recruiterEmail]||{};
            const jobApps=recruiterApps[jobId]||[];
            if(jobApps.some(a=>a.candidateEmail===application.candidateEmail)){
                return prev;
            }
            return{
                ...prev,
                [recruiterEmail]:{
                    ...recruiterApps,
                    [jobId]:[...jobApps,application],
                },
            };
        });
    };
    return(
        <ApplicationContext.Provider value={{applyToJob,applications}}>
            {children}
        </ApplicationContext.Provider>
    )

}
export function useApplications(){
    return useContext(ApplicationContext);
}
