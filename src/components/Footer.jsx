import { Github, Linkedin, Twitter } from "lucide-react";
function Footer(){
    return(
        <footer className=" bg-gray-900 text-gray-300 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-10 py-16">
            <div className="space-y-3">
                <h2 className="text-xl font-bold text-white">JobPortal</h2>
                <p className="text-sm text-gray-400">Find your dream job.</p>
                 <div className="flex gap-4 pt-2">
                        <Github className="w-5 h-5 hover:text-white cursor-pointer" />
                        <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
                        <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
  </div>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-3">Explore</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li className="hover:text-white cursor-pointer">Jobs</li>
                    <li className="hover:text-white cursor-pointer">Saved Jobs</li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-3">Company</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li className="hover:text-white cursor-pointer">About</li>
                    <li className="hover:text-white cursor-pointer">Contact</li>
                    <li className="hover:text-white cursor-pointer">Privacy</li>
                </ul>
            </div>
            <div >
                <h3 className="text-white font-semibold mb-3">Resources</h3>
                <p className="text-sm text-gray-400">Built for students & developers</p>
            </div>
            
        </div>
        <div className="text-center border-t border-gray-700 py-4 text-sm text-gray-400">
           <p>  © 2025 JobPortal.All rights reserved.</p>
        </div>
        </footer>
    )

}
export default Footer;