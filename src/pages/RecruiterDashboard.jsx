import {useAuth} from "../context/AuthContext";
import {useJobs} from "../context/JobsContext";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import { useApplications } from "../context/ApplicationContext";
import { Trash2,Pencil } from "lucide-react";

function RecruiterDashboard(){
    const {user}=useAuth();
    const {applications}=useApplications();
    const recruiterApps=applications[user.email]||{};
    
    const {jobs,deleteJob}=useJobs();
    console.log(jobs);
    const myJobs=jobs.filter(j=>j.postedBy===user.email);

    return(
        <div className="bg-gray-50 w-full h-screen">
        <Navbar />
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">My Posted Jobs</h1>
            {myJobs.length===0?(
                <p className="text-gray-500">You haven't posted any jobs yet.</p>
            ):(
                <div className="space-y-4">
                    {myJobs.map(job=>{
                        const applicants=recruiterApps[job.id]||[];
                        return(
                        <div
                            key={job.id}
                            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                        >
                            <div>
                                <h2 className="font-semibold">{job.title}</h2>
                                <p className="text-sm text-gray-500">{job.company}</p>
                                <h3 className="font-medium mt-3">Applicants</h3>
                                {applicants.length===0?(
                                    <p className="text-sm text-gray-400">No applications yet</p>
                                ):(
                                    <ul className="space-y-2">
                                        {applicants.map((app,index)=>(
                                            <li key={index}
                                            className="border p-2 rounded text-sm"
                                            >
                                                <p><b>Email:</b>{app.email}</p>
                                                <p className="text-gray-500">Applied on:{new Date(Number(app.appliedAt)).toLocaleString()}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="flex gap-3">
                                <Link to={`/edit-job/${job.id}`}>
                                <Pencil className="text-blue-600 hover:text-blue-800" />
                                </Link>
                                <button onClick={()=>deleteJob(job.id)}>
                                    <Trash2 className="text-red-600 hover:text-red-800" />
                                </button>
                            </div>
                        </div>)
                        })}
                </div>
            )}
        </div>

        </div>
        
    )

}
export default RecruiterDashboard;