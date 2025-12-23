function AuthButton({children}){
    return(
        <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
            {children}
        </button>
    )

}
export default AuthButton;