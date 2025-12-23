import {Link} from 'react-router-dom';
import {Menu} from 'lucide-react';
import {useState} from'react';
import { useJobs } from '../context/JobsContext';
import { useAuth } from '../context/AuthContext';
function Navbar(){
    const {user}=useAuth();
    const text=[
        {   
            id:1,
            to:"/jobs",
            msg:"Jobs",
            style:"hover:text-blue-600 transition font-medium",
            roles:["Candidate","Recruiter"]

        },
        {
            id:2,
            to:"/dashboard",
            msg:"Dashboard",
            style:'hover:text-blue-600 transition font-medium',
            roles:["Candidate"]
        },
        {
            id:3,
            to:"/post-job",
            msg:"Post Job",
            style:"hover:text-blue-600 transition font-medium",
            roles:["Recruiter"]
        },
        {
            id:4,
            to:"/recruiter/dashboard",
            msg:"Posted Jobs",
            style:"hover:text-blue-600 transition font-medium",
            roles:["Recruiter"]

        },
        {
            id:5,
            to:"/login",
            msg:"Login",
            style:"bg-blue-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition font-medium",
            roles:["Recruiter","Candidate","GUEST"]

        }
        
    ];
    const visibleLinks=text.filter(item=>{
        if(!user)
            return item.roles.includes("GUEST");
        return item.roles.includes(user.role);
    })
    const [open,setOpen]=useState(false);
    return(
        <nav className="h-14 sm:h-16 flex items-center justify-between border-b border-gray-200 px-4 sm:px-6 md:px-8 sticky top-0 z-50 bg-white">
            
            <Link  to= '/' className="text-blue-600 font-bold text-lg sm:text-xl md:text-2xl">JobPortal</Link>
        
            <div className="hidden md:flex gap-6  items-center  md:text-base ">
                {
                    visibleLinks.map((item)=>(
                           
                    <Link key={item.id} to={item.to} className={item.style}>{item.msg}</Link>
               )) }
              
            </div>
            <div className="md:hidden " onClick={()=>setOpen(!open)}>
                <Menu />
            </div>
            {open && (
            
            <div className="absolute left-0 top-full w-full  flex flex-col items-start p-4 bg-white shadow-md  md:hidden">
                {
                    visibleLinks.map((item)=>(
                    
                    <Link key={item.id} to={item.to} className='py-2 w-full font-medium text-sm hover:bg-gray-100 hover:p-2'>{item.msg}</Link>
               )) }
            </div>



           ) }

        </nav>
    )

}
export default Navbar;