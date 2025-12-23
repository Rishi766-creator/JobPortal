import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useJobs } from "../context/JobsContext";
import { useAuth } from "../context/AuthContext";
import {useState} from 'react';
function JobDetails(){

    const {id}=useParams();
    const {jobs}=useJobs();
    const {user}=useAuth();
    const use=user?.role=="Candidate";
    

    const [applied,setApplied]=useState(false);
    const job=jobs.find(job=>String(job.id)===id);
    if(!job){
        return <p className="text-center mt-10">Job not found</p>
    }
    const handleApply=()=>{
        const applications=JSON.parse(localStorage.getItem("applications"))||{};
        const recruiterEmail=job.postedBy;
        const recruiterApps=applications[recruiterEmail]||{};
        const jobApps=recruiterApps[id]||[];
        if(!jobApps.some((a)=>a?.email===user?.email)){
            jobApps.push({
                name:user?.email,
                email:user?.email,
                appliedAt:Date.now()
            });
            recruiterApps[id]=jobApps;
            applications[recruiterEmail]=recruiterApps;
            localStorage.setItem("applications",JSON.stringify(applications));
            setApplied(true);
        }

    }
    return(
        <div >
            <Navbar />
            <section className="bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-10 ">
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <p className="text-gray-600 mt-1">{job.company} .  {job.location}</p>
            <div className="flex gap-4 mt-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {job.type}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {job.experience}
                </span>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Job Description</h2>
                <p className="mt-2 text-gray-700">{job.description}</p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Requirements</h2>
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                    {job.requirements.map((req,index)=>(
                        <li key={index}>{req}</li>
                    ))}
                </ul>
            </div>
            {use && (
            <button onClick={handleApply} disabled={applied} className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                {applied ? "Applied" : "Apply Now"}
            </button>
            )}
            
            
            
            
            
            
            </div>
            <Footer />
            </section>
        </div>
    )

}
export default JobDetails;