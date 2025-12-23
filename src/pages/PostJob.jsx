import Navbar from '../components/Navbar';
import { useJobs } from '../context/JobsContext';
import {useState} from 'react';
import { useAuth } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

function PostJob(){
    const [details,setDetails]=useState(
        {
            
            title:"",
            company:"",
            location:"",
            type:"",
            experience:"",
            description:"",
            requirements:"",
        }
    );
    function update(e){
        const name=e.target.name;
        const value=e.target.value;
        setDetails(prev=>({
            ...prev,
            [name]:value,

        }))
    };
    const {user}=useAuth();
    const {addJob}=useJobs();
    const nav=useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        addJob({...details,id:Date.now(),requirements:details.requirements.split('\n').filter(r=>r.trim()!==""),postedBy:user.email});
        nav('/jobs');



    }
    return(
        <>
            <Navbar />
            <div className='bg-gray-50'>
            <div className="max-w-3xl mx-auto p-6 ">
                <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
                <form className="space-y-4 bg-white p-6 rounded-xl shadow" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="title"
                        value={details.title}
                        placeholder="Job Title"
                        className='w-full border-2 border-gray-300 p-3 rounded focus:outline-none  focus:ring-2 focus:ring-blue-600'
                        onChange={update}
                    />
                    <input 
                        type="text"
                        name="company"
                        value={details.company||""}
                        placeholder="Company Name"
                        className='w-full  border-2 border-gray-300 p-3 rounded focus:outline-none  focus:ring-2 focus:ring-blue-600'
                        onChange={update}
                    />
                    <input 
                        type="text"
                        name="location"
                        value={details.location}
                        placeholder="Location"
                        className='w-full  border-2 border-gray-300 p-3 rounded focus:outline-none  focus:ring-2 focus:ring-blue-600'
                        onChange={update}
                    />
                    <select name="type" value={details.type} className="w-full  border-2 border-gray-300 p-3 rounded focus:outline-none  focus:ring-2 focus:ring-blue-600" onChange={update}>
                        <option value="" disabled>Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-Time</option>
                        <option value="Internship">Internship</option>
                        <option value="Remote">Remote</option>
                    </select>
                    <select name="experience" value={details.experience} className="w-full  border-2 border-gray-300 p-3 rounded focus:outline-none  focus:ring-2 focus:ring-blue-600 " onChange={update}>
                        <option value="" disabled>Experience Level</option>
                        <option value="Fresher">Fresher</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                    </select>
                    <textarea
                        name="description"
                        value={details.description}
                        placeholder="Job Description"
                        rows="4"
                        className='w-full  border-2 border-gray-300 p-3 rounded focus:outline-none  focus:ring-2 focus:ring-blue-600'
                        onChange={update}
                    />  
                    <textarea
                        name="requirements"
                        value={details.requirements}
                        placeholder="Requirements"
                        rows="4"
                        className='w-full  border-2 border-gray-300 p-3 rounded focus:outline-none  focus:ring-2 focus:ring-blue-600'
                        onChange={update}
                    />
                    <button className='w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700' type="submit">Post Job</button>
                    
                </form>
            </div>
            </div>
        </>
    )

}
export default PostJob;