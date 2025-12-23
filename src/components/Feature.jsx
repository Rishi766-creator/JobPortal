import { Briefcase,Zap,ShieldCheck } from "lucide-react";
import FeatureCard from "./FeatureCard";
function Feature(){
    const features=[
        {
            id:1,
            title:"Remote Jobs",
            desc:"Work from anywhere with thousands of remote job oppurtunities.",
            icon:<Briefcase size={28} strokeWidth={2.5} className="text-white "/>
        },
        {
            id:2,
            title:"Easy Apply",
            desc:"Apply to jobs quickly with a sample and fast applicaion process.",
            icon:<Zap size={24} strokeWidth={2.5} className="text-white "/>
        },
        {
            id:3,
            title:"Trusted Companies",
            desc:"Apply to jobs from verified and well-known companies",
            icon:<ShieldCheck size={24} strokeWidth={2.5} className="text-white"/>
        },
    ]
    return(
        <section className="bg-gray-50 py-4">
            <div className="max-w-7xl mx-auto px-4 pb-20 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Why choose <span className="text-blue-600">JobPortal?</span></h2>
                <p className="mt-3 text-gray-600 max-w-xl mx-auto">Everything you need to find your next oppurtunity,al in one place.</p>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {
                        features.map((item)=>(
                            <FeatureCard
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                            />
                        ))
                    }
                </div>
            </div>
            
        </section>
    )
}
export default Feature;