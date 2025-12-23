function InputField({label,type,value,onChange,placeholder,options=[]}){
    if(type=="radio"){
        return(
            <div>
                <label className="block text-sm font-medium mb-2">{label}</label>
                <div className="flex gap-4">
                    {options.map(opt=>(
                        <label key={opt.value} className="flex items-center gap-2 text-sm">
                            <input 
                                type="radio"
                                name={name}
                                value={opt.value}
                                checked={value===opt.value}
                                onChange={onChange}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            </div>
        )
    }
    return(
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </div>
    )

}
export default InputField;