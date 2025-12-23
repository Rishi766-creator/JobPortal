import {useNavigate} from 'react-router-dom';
function Hero() {
    const nav=useNavigate();
    function job(){
        nav('/jobs');
    }
    function post(){
        nav('/post-job');
    }
  return (
    <section className="relative bg-gray-50 min-h-[90vh] flex items-center justify-center  ">
    <div className="flex flex-col relative z-10 items-center  py-24 px-4 max-w-7xl gap-6">
        <p className="text-4xl sm:text-5xl md:text-6xl  font-bold text-gray-900">Find your <span className="text-blue-600">Dream Job</span></p>
        <p className=" py-2 px-4 rounded-lg max-w-2xl text-md sm:text-lg text-center text-gray-900">Discover jobs from top companies and apply with confidence.</p>
        <div className="flex gap-6 mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-md hover:bg-blue-700 transition shadow-md" onClick={job}>Browse a Job</button>
            <button className="border border-gray-500 rounded-lg px-6 py-3 font-medium text-md hover:bg-gray-50 transition" onClick={post}>Post a Job</button>
        </div>
    </div>
    </section>
    
  );
}
export default Hero;