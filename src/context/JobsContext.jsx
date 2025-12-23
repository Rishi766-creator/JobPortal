import {useContext,createContext,useState,useEffect} from 'react';
import jobsData from '../data/jobs';
const JobContext=createContext();
export function JobProvider({children}){
    const [jobs,setJobs]=useState(()=>{
        const storedJobs=localStorage.getItem("postedJobs");
        return storedJobs?[...jobsData,...JSON.parse(storedJobs)]:jobsData;

    });
    const addJob=(newJob)=>{
        setJobs((prev)=>{
            const updatedJobs=[...prev,newJob];
            const userJobs=updatedJobs.filter((j)=>j.id>10);
            localStorage.setItem("postedJobs",JSON.stringify(userJobs));
            return updatedJobs;
        
        })
    };
    const deleteJob=(jobId)=>{
        setJobs(prev=>{
        const currentJobs=prev.filter(j=>j.id!==jobId);
        const userJobs=currentJobs.filter(j=>j.id>10);
        localStorage.setItem("postedJobs",JSON.stringify(userJobs));
        return currentJobs;

     } )

        
    };
    const updateJob=(job)=>{
        setJobs(
            prev=>{
                const currentJob=prev.map(j=>j.id===job.id?job:j);
                const userJobs=currentJob.filter(j=>j.id>10)
                localStorage.setItem("postedJobs",JSON.stringify(userJobs));
                return currentJob;
            }
        )
    }
     
    return(
        <JobContext.Provider value={{jobs,addJob,deleteJob,updateJob}}>
            {children}
        </JobContext.Provider>
    )

}
export function useJobs(){
    return useContext(JobContext);
}