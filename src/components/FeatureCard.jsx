function FeatureCard({icon,title,desc}){
    return(
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-600 mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
                {title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
                {desc}
            </p>
        </div>
    )

}
export default FeatureCard;