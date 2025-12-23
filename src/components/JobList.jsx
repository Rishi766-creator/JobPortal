import JobCard from "./JobCard";
import {useJobs} from "../context/JobsContext";
function JobList({jobs}){
    
        
        if(jobs.length===0){
            return <p classsName="text-gray-500">No jobs found</p>;
        };
        
    return(
        <div className="grid gap-4">
            {jobs.map((job)=>(
                <JobCard key={job.id} job={job} className="mb-2"/>
            ))}

        </div>

        
    )

}
export default JobList;