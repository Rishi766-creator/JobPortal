import {useParams,useNavigate} from "react-router-dom";
import {useJobs} from "../context/JobsContext";
import {useState} from 'react';
import Navbar from '../components/Navbar';
function EditJob(){
    const {id}=useParams();
    const nav=useNavigate();
    const {jobs,updateJob}=useJobs();
    const job=jobs.find(j=>String(j.id)===id);
    const [details,setDetails]=useState(job);
    function update(e){
        setDetails({...details,[e.target.name]:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        updateJob(details);
        nav("/jobs");
    }
    return(
        <>
        <Navbar />
        <div className="bg-gray-50">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 flex flex-col items-center justify-center gap-4">
            <input name="title" value={details.title} onChange={update} className="border border-gray-300 py-2 px-4 rounded-lg text-gray-500 focus:ring-2 focus:ring-blue-600 focus:outline-none"/>
            <input name="company" value={details.company} onChange={update} className="border border-gray-300 py-2 px-4 rounded-lg text-gray-500 focus:ring-2 focus:ring-blue-600 focus:outline-none"/>
            <button type="submit" className="bg-blue-600 text-white text-sm font-medium p-2 rounded-lg hover:bg-blue-700">Update Job</button>
        </form>
        </div>
        </>
    )


}
export default EditJob;