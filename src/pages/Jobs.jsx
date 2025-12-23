import FilterPanel from "../components/FilterPanel";
import {useState} from 'react';
import JobList from "../components/JobList";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {useJobs} from "../context/JobsContext"

function Jobs(){

    const [filters,setFilters]=useState({
        type:"",
        location:"",
        experience:""
    });
    const [search,setSearch]=useState("");
    const {jobs}=useJobs();
    const [isOpen,setIsOpen]=useState(false);
    const filteredJobs=jobs.filter((job)=>{
        return(
            (!filters.type||filters.type.toLowerCase()===(job.type||"").toLowerCase()) &&
            (!filters.location || filters.location.toLowerCase()===(job.location||"").toLowerCase()) &&
            (!filters.experience || filters.experience.toLowerCase()===(job.experience||"").toLowerCase()) &&
            
    (
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search)
    )
        );

})
    return(
        <div className="bg-gray-50">
        <Navbar />
        <div className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ${isOpen?"translate-x-0":"-translate-x-full"}`}>
            <div className="absolute inset-0  bg-black/40" onClick={()=>setIsOpen(false)}/>
            <div className="relative w-72 h-full bg-white p-4 shadow-lg"><button className="mb-4 text-sm text-gray-500" onClick={()=>setIsOpen(false)}>Close</button>
            <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
        </div>
        <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6 items-start">
        
        <div className="hidden md:block md:sticky md:top-24 ">
        <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
        <button className="md:hidden bg-blue-600 text-white rounded-lg px-4 py-2 mb-4" onClick={()=>setIsOpen(true)}>Filters</button>
        <div className="md:col-span-3">
        <input
  type="text"
  placeholder="Search jobs or companies..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

        
            <JobList jobs={filteredJobs} />
        </div>
        </div>
        <Footer />
        </div>
    )

}
export default Jobs;