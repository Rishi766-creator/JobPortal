import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import { useSavedJobs } from "../context/SavedJobsContext";
import {useAuth} from "../context/AuthContext";
import {useJobs} from "../context/JobsContext";
function Dashboard(){
    const {savedJobs}=useSavedJobs();
    const {user}=useAuth();
    const {jobs}=useJobs();
    const applications=JSON.parse(localStorage.getItem("applications"))||{};
    const appliedJobs=[];
    Object.values(applications).forEach((recruiterApps)=>{
        Object.entries(recruiterApps).forEach(([jobId,apps])=>{
            if(apps.some((a)=>a?.email===user?.email)){
                const job=jobs.find((j)=>String(j.id)===jobId);
                if(job) appliedJobs.push(job);
            }
        })
    })
    
    return(
        <>
        <Navbar />
        <div className="bg-gray-50 w-full h-screen">
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Saved Jobs</h1>
            {savedJobs.length===0?(
                <p className="text-gray-500">You have no saved jobs yet.</p>
            ):(
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {savedJobs.map((job)=>(
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            )}
            <h1 className="text-3xl font-bold mt-10 mb-6">Applied Jobs</h1>
            {appliedJobs.length===0?(
                <p className="text-gray-500">You haven't applied to any jobs yet.</p>
            ):(
                <div className="grid gap-6 sm:grid-cos-1 md:grid-cols-2 lg:grid-cols-3">
                    {appliedJobs.map((job)=>{
                       return <JobCard key={job.id} job={job} />
                    })}
                    </div>
            )}
        </div>
        </div>
        </>
    )

}
export default Dashboard;