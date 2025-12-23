function AuthLayout({title,subtitle,error,children}){
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-gray-900 text-center">{title}</h1>
                <p className="text-gray-600 text-sm text-center mt-2">{subtitle}</p>
                {error && <p className="text-red-600 text-md text-center mt-3">"{error}"</p>}
                <div className="mt-6">
                    {children}
                </div>


            </div>

        </div>
    )

}
export default AuthLayout;