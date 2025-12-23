function FilterPanel({filters,setFilters}){
    function handleChange(e){
        const {name,value}=e.target;
        setFilters(prev=>({
            ...prev,[name]:value
        }));

    }
    return(
        <aside className="bg-white p-4 shadow-md border border-gray-200  rounded-xl">
            <h3 className="text-lg mb-4 font-semibold">Filters</h3>
            <div className="mb-4">
                <label className="text-sm font-medium mb-1 block">Job Type</label>
                <select 
                    name="type"
                    value={filters.type}
                    onChange={handleChange}
                    className="w-full border  border-gray-300 rounded-md p-2 focus:outline-none">
                    <option value="">All</option>
                    <option value="internship">Internship</option>
                    <option value="full-time">Full-time</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="text-sm font-medium mb-1 block">Location</label>
                <select
                    name="location"
                    value={filters.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none">
                    <option value="">All</option>
                    <option value="onsite">Onsite</option>
                    <option value="remote">Remote</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="text-sm font-medium  mb-1 block">Experience</label>
                <select
                    name="experience"
                    value={filters.experience}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none">
                    <option value="">All</option>
                    <option value="fresher">Fresher</option>
                    <option value="1+">1+</option>
                </select>
            </div>



        </aside>
    )

}
export default FilterPanel;