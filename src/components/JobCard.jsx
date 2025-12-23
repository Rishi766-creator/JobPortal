import {Heart} from 'lucide-react';
import {useSavedJobs} from "../context/SavedJobsContext";
import {Link} from 'react-router-dom';
import {Pencil,Trash} from 'lucide-react';
import {useAuth} from '../context/AuthContext';
import { useJobs } from '../context/JobsContext';
import { useApplications } from '../context/ApplicationContext';
function JobCard({job}){
    const {savedJobs,toggleJob}=useSavedJobs();
    const isSaved=savedJobs.some(j=>j.id===job.id);
    const {user}=useAuth();
    if (!user) return null;

    const use=user?.role==="Candidate";
    const {applications}=useApplications();
    const hasApplied=(jobId)=>{
        if(!user) return false;
        return Object.values(applications).some((recruiterApps)=>
        recruiterApps[String(jobId)]?.some((app)=>app?.email===user?.email))
    }

    return(
        <div className='bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between items-start hover:shadow-xl transition'>
            
            <div className='flex justify-between w-full'>
            <div className='space-y-2 pt-4'>
                <h3 className='text-lg font-semibold'>{job.title}</h3>
                <p className='text-sm text-gray-600'>{job.company}</p>
            
            <div className='flex gap-4 mt-2 text-sm text-gray-500'>
                <span>{job.location}</span>
                <span>{job.type}</span>
                {hasApplied(job.id)?(<span>Applied</span>):("")}
            </div>
            <Link to={`/jobs/${job.id}`} className='text-sm text-blue-600 font-medium hover:underline'>View Details</Link>
            </div>
            {use && (
            <button onClick={()=>toggleJob(job) } className="text-gray-400 hover:text-red-500 transition"><Heart size={20} className={isSaved?"text-red-500 fill-red-500":"text-gray-400"}/></button>
            )}
            </div>
        </div>

    )
}
export default JobCard;